<template>
  <modal v-if="modals.action" v-model="modals.action" :modal-title="category ? $lang.app.categoryEditing : $lang.app.categoryAdding" disable-backdrop-close>
    <form @submit.prevent="save" class="p-4">
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }}<span class="text-danger">*</span></label>
        <input required type="text" class="form-control" v-model="form.name">
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.matchCategoryId }}<span class="text-danger">*</span></label>
        <category-select v-model="form.matchCategoryId" :match-category="matchCategory"/>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input v-model="form.hasColor" class="form-check-input" type="checkbox" id="has-color">
          <label class="form-check-label" for="has-color">
            {{ $lang.app.hasColor }}
          </label>
        </div>
      </div>
      <size-select v-model="form.sizeFieldId"/>
      <div class="form-group">
        <div class="form-check">
          <input v-model="form.active" class="form-check-input" type="checkbox" id="active">
          <label class="form-check-label" for="active">
            {{ $lang.app.active }}
          </label>
        </div>
      </div>
      <div class="text-right w-100">
        <button type="submit" class="btn btn-success">{{ $lang.app.save }}</button>
        <button type="button" @click="modals.action = false" class="btn btn-light">{{ $lang.app.cancel }}</button>
      </div>
    </form>
  </modal>
</template>

<script>
import Modal from "../../partials/Modal.vue";
import CategorySelect from "../../partials/category-select/CategorySelect.vue";
import SizeSelect from "./SizeSelect.vue";
export default {
  name: "StoreCategoryModal",
  components: {SizeSelect, CategorySelect, Modal},
  props: {
    modelValue: Boolean,
    category: [Object, null],
    parentId: [Number, null]
  },

  watch: {
    modelValue(val) {
      this.modals.action = val
    },
    'modals.action'(val) {
      this.$emit('update:modelValue', val)
    }
  },

  data() {
    return {
      modals: {
        action: false
      },
      form: {
        id: this.category ? this.category.id : '',
        parentId: this.parentId || '',
        icon: {
          id: '',
          fullPath: '',
          type: '',
          file: null
        },
        fields: [],
        name: this.category ? this.category.name : '',
        maxPrice: this.category ? this.category.maxPrice : '',
        active: this.category ? this.category.active : true,
        matchCategoryId: '',
        hasColor: this.category ? this.category.hasColor : false,
        sizeFieldId: this.category ? this.category.sizeFieldId || '' : ''
      },
      matchCategory: null
    }
  },

  created() {
    if (this.category)
      this.fetchCategory(this.category.id)

    this.modals.action = this.modelValue
  },

  methods: {
    save() {
      if (this.form.id) {
        return  this.axios.put(this.$urls.storeSettingsCategory.replace(':storeId', this.$store.getters.store.id).replace(':categoryId', this.form.id), this.form)
            .then(res => {
              this.$emit('save', res.data)
              this.modals.action = false
              this.$snotify.success(this.$lang.app.saveSuccessMsg)
            })
      }
      return this.axios.post(this.$urls.storeSettingsCategories.replace(':storeId', this.$store.getters.store.id), this.form)
          .then(res => {
            this.$emit('save', res.data)
            this.modals.action = false
            this.$snotify.success(this.$lang.app.saveSuccessMsg)
          })
    },

    fetchCategory(id) {
      return this.axios.get(this.$urls.storeSettingsCategoriesEdit.replace(':storeId', this.$store.getters.store.id).replace(':categoryId', id))
          .then(res => {
            this.form.fields = res.data.fields
            this.form.matchCategoryId = res.data.matchCategory.id
            this.matchCategory = res.data.matchCategory
            if (res.data.icon) {
              this.form.icon.id = res.data.icon.id
              this.form.icon.fullPath = res.data.icon.fullPath
              this.form.icon.type = res.data.icon.type
            }
          })
    },
  }
}
</script>

<style scoped>
.form-check-input {
  position: relative;
  top: 1px;
  margin-right: 3px;
}
</style>