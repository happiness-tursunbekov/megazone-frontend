<template>
  <div class="widget">
    <div class="widget-title">
      <button @click="showActionModal()" class="btn btn-success" type="button">{{ $lang.app.add }}</button>
    </div>
    <div class="widget-body position-relative">
      <store-category-tree v-model:categories="categories" :show-action-modal="showActionModal" :show-fields-modal="showFieldsModal" v-model:self-dropped="selfDropped" v-model:dragging="dragging"/>
    </div><!-- End .widget-body -->
  </div>
  <store-category-modal v-if="modals.action" v-model="modals.action" :parent-id="parent ? parent.id : null" :category="category" @save="saved"/>
  <fields-modal v-if="modals.fields" v-model="modals.fields" :category="category"/>
</template>

<script>
import StoreCategoryTree from "./StoreCategoryTree.vue";
import StoreCategoryModal from "./StoreCategoryModal.vue";
import FieldsModal from "./FieldsModal.vue";
export default {
  name: "StoreCategories",
  components: {FieldsModal, StoreCategoryModal, StoreCategoryTree},
  computed: {
    store() {
      return this.$store.getters.store
    }
  },
  data() {
    return {
      open: null,
      modals: {
        action: false,
        fields: false
      },
      parent: null,
      category: null,
      categories: [],
      selfDropped: false,
      dragging: false
    }
  },

  created() {
    this.fetchCategories()
  },

  methods: {
    fetchCategories() {
      return this.axios.get(this.$urls.storeSettingsCategories.replace(':storeId', this.store.id))
      .then(res => {
        this.categories = res.data
      })
    },

    saved(cat) {
      if (this.parent) {
        const index = this.parent.children.findIndex(item => item.id === cat.id);
        if (index > -1)
          this.parent.children.splice(index, 1, cat)
        else
          this.parent.children.push(cat)
      } else {
        const index = this.categories.findIndex(item => item.id === cat.id);
        if (index > -1)
          this.categories.splice(index, 1, cat)
        else
          this.categories.push(cat)
      }
    },

    showActionModal(parent, category) {
      this.parent = parent || null
      this.category = category
      this.modals.action = true
    },

    showFieldsModal(category) {
      this.category = category
      this.modals.fields = true
    }
  }
}
</script>

<style scoped>

</style>