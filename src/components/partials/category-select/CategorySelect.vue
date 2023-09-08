<template>
  <div class="input-group">
    <input :value="category.name" type="text" class="form-control" readonly>
    <div class="input-group-append">
      <button @click="modals.categoriesTree = true" type="button" class="btn btn-secondary">{{ $lang.app.select }}</button>
    </div>
  </div>
  <category-select-modal v-model="modals.categoriesTree" v-model:category="category"/>
</template>

<script>
import CategorySelectModal from "./CategorySelectModal.vue";
export default {
  name: "CategorySelect",
  components: {CategorySelectModal},
  props: {
    modelValue: [Number, String],
    matchCategory: Object
  },

  data() {
    return {
      modals: {
        categoriesTree: false
      },
      category: this.matchCategory || {},
      categoryId: this.modelValue
    }
  },

  watch: {
    category(cat) {
      this.$emit('update:modelValue', cat.id)
    },
    matchCategory(cat) {
      this.category = cat
    }
  }
}
</script>

<style scoped>

</style>