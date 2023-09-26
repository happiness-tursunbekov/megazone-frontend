<template>
  <div class="input-group">
    <input
        ref="input"
        :value="category.name"
        type="text" class="form-control"
        :required="required"
        @focusin="$refs.input.setAttribute('readonly', 'readonly')"
        @focusout="$refs.input.removeAttribute('readonly')"
        :placeholder="$lang.app.selectACategory"
    >
    <div class="input-group-append">
      <button @click="modals.categoriesTree = true" type="button" class="btn btn-secondary">{{ $lang.app.select }}</button>
    </div>
  </div>
  <store-category-select-modal v-model="modals.categoriesTree" v-model:category="category"/>
</template>

<script>
import StoreCategorySelectModal from "./StoreCategorySelectModal.vue";
export default {
  name: "StoreCategorySelect",
  components: {StoreCategorySelectModal},
  props: {
    modelValue: [Number, String],
    matchCategory: Object,
    required: Boolean
  },

  emits: ['change', 'update:modelValue'],

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
      this.$emit('change', cat.id)
    },
    matchCategory(cat) {
      this.category = cat
    }
  }
}
</script>

<style scoped>

</style>