<template>
  <div class="position-relative">
    <div v-for="(item, key) in categories" class="position-relative" :class="{ 'child-el': item.parentId }">
      <div class="w-100 p-2" :data-category-id="item.id" @drop.prevent="drop($event,  key, item.parentId)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave"></div>
      <div class="input-group input-group-el">
        <div class="input-group-prepend">
          <button v-if="item.children.length > 0" @click="item.open = !item.open" @dragenter="!$event.dataTransfer.types.includes('category-id-' + item.id) ? item.open = true : null" class="btn btn-arrow btn-light" type="button">
            <i v-if="item.open" class="la la-angle-down"></i>
            <i v-else class="la la-angle-right"></i>
          </button>
        </div>
        <button type="button" @drop.prevent="innerDrop($event, item)" @dragover.prevent :data-category-id="item.id" @dragstart="item.open = false; dragStart($event, item)" @dragend.prevent="dragEnd($event)" draggable="true" class="btn form-control-plaintext btn-light text-left">
          <i class="la la-arrows-alt"></i>
          {{ item.name }}
        </button>
        <div class="input-group-append">
          <button @click="showActionModal(item)" :title="$lang.app.add" class="btn btn-arrow btn-light" type="button">
            <i class="la la-plus"></i>
          </button>
          <button @click="showActionModal(parent, item)" :title="$lang.app.edit" class="btn btn-arrow btn-light" type="button">
            <i class="la la-pencil"></i>
          </button>
          <button @click="showFieldsModal(item)" :title="$lang.app.fields" class="btn btn-arrow btn-light" type="button">
            <i class="la la-list"></i>
          </button>
          <button @click="deleteItem(item)" :title="$lang.app.delete" class="btn btn-arrow btn-light" type="button">
            <i class="la la-trash"></i>
          </button>
        </div>
      </div>
      <div v-if="item.children.length > 0 && item.open" class="child">
        <store-category-tree
            v-model:categories="item.children"
            :show-action-modal="showActionModal"
            :show-fields-modal="showFieldsModal"
            v-model:self-dropped="selfDropped"
            v-model:dragging="dragging"
            :parent="item"
        ></store-category-tree>
      </div><!-- End .collapse -->
    </div>
    <div v-if="dragging" class="w-100 p-2" @drop.prevent="drop($event,  categories.length)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave"></div>
  </div>
</template>

<script>
export default {
  name: "StoreCategoryTree",
  props: {
    categories: Array,
    showActionModal: Function,
    selfDropped: Boolean,
    dragging: Boolean,
    parent: Object,
    showFieldsModal: Function
  },
  emits: ['update:categories', 'update:selfDropped', 'update:dragging'],
  data: function() {
    return {
      categoryId: null,
      iconRefs: [],
      childRefs: []
    };
  },

  watch: {
    selfDropped(val) {
      this.$emit('update:selfDropped', val)
    },

    dragging(val) {
      this.$emit('update:dragging', val)
    }
  },

  methods: {
    dragStart(e, category) {
      this.categoryId = category.id
      e.dataTransfer.setData("category", JSON.stringify(category))
      e.dataTransfer.setData(`category-id-${category.id}`, category.id)
      this.$emit('update:dragging', true)
    },

    dragEnd(e) {
      if (e.dataTransfer.dropEffect === 'move' && !this.selfDropped) {
        this.$emit('update:categories', this.categories.filter(item => item.id !== this.categoryId))
      }
      this.categoryId = null
      this.$emit('update:selfDropped', false)
      this.$emit('update:dragging', false)
    },

    drop(e, index, parentId) {
      try {
        const category = JSON.parse(e.dataTransfer.getData("category"))
        let categories = this.categories
        let cancel = false
        e.preventDefault()
        if (this.categories.filter(cat => cat.id === category.id).length > 0) {
          if (category.id !== parseInt(e.target.getAttribute('data-category-id')) && this.categories.findIndex(cat => cat.id === category.id) + 1 !== index) {
            if (categories.findIndex(cat => cat.id === category.id) < index)
              index--
            categories = categories.filter(cat => cat.id !== category.id)
          } else {
            cancel = true;
          }
          this.$emit('update:selfDropped', true)
        }
        if (!cancel) {
          category.parentId = parentId
          categories = [
            ...categories.slice(0, index),
            category,
            ...categories.slice(index)
          ];

          this.axios.post(this.$urls.storeSettingsCategoriesSort, {'sort': categories.map(cat => ({id: cat.id, parentId: cat.parentId}))})
        }
        this.$emit('update:categories', categories)
      } catch (e) {
        console.log(e)
      }
      e.target.classList.remove('dragging')
    },

    innerDrop(e, item) {
      const category = JSON.parse(e.dataTransfer.getData("category"))
      if (item.children.filter(cat => cat.id === category.id).length === 0 && item.id !== category.id) {
        category.parentId = item.id
        item.children.splice(0, 0, category)
        this.axios.post(this.$urls.storeSettingsCategoriesSort, {'sort': item.children.map(cat => ({id: cat.id, parentId: cat.parentId}))})
      } else {
        this.$emit('update:selfDropped', true)
      }

      e.preventDefault()
    },

    dragEnter(e) {
      if (e.dataTransfer.types.includes('category'))
        e.target.classList.add('dragging')
    },

    dragLeave(e) {
      e.target.classList.remove('dragging')
    },

    deleteItem(item) {
      this.$snotify.confirm(item.children.length > 0 ? this.$lang.app.deleteCatWithInnerConfirmMsg : this.$lang.app.deleteConfirmMsg, this.$lang.app.warning, {
        closeOnClick: false,
        backdrop: 0.5,
        timeout: 0,
        buttons: [
          {text: this.$lang.app.yes, action: (toast) => {
              this.axios.delete(this.$urls.storeSettingsCategory.replace(':storeId', this.$store.getters.store.id).replace(':categoryId', item.id))
                  .then(res => {
                    this.$emit('update:categories', this.categories.filter(cat => cat.id !== res.data.id))
                    this.$snotify.remove(toast.id)
                    this.$snotify.success(this.$lang.app.deleteSuccessMsg)
                  })
            }, bold: true
          },
          {text: this.$lang.app.no, action: toast => this.$snotify.remove(toast.id)},
        ]
      });
    }
  }
}
</script>

<style scoped>
.child {
  position: relative;
  margin-left: 16px;
}
.child-el:before {
  position: absolute;
  text-align : center;
  content: "___";
  left:-15px;
  top: 12px
}
.child-el:after {
  display:block;/* probably not really needed? */
  content: "";
  width:1px;
  height:100%;/* slight higher to work around rounding errors(?) on some zoom levels in some browsers. */
  background-color:#000000;
  position: absolute;
  top:0;
  left: -15px;
}
.input-group-el {
  border-left: 3px solid #39f;
  z-index: 1;
}

.dragging {
  background-color: #39f;
  border: 1px dashed #000000;
  height: 37px;
}
</style>