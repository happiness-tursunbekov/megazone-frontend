<template>
  <modal
      v-model="modals.categoriesTree"
      :modal-title="$lang.app.selectCategory"
      disable-backdrop-close
  >
    <categories-tree v-model="cat" :categories="categoriesTree" :close="close"/>
  </modal>
</template>

<script>
import Modal from "../Modal.vue";
import CategoriesTree from "../category-select/CategoriesTree.vue";
export default {
  name: "StoreCategorySelectModal",
  components: {CategoriesTree, Modal},
  props: {
    category: Object,
    modelValue: Boolean
  },
  emits: ['update:category', 'update:modelValue'],
  computed: {
    categoriesTree() {
      return this.$store.getters.store.categories
    }
  },

  data() {
    return {
      modals: {
        categoriesTree: this.modelValue
      },
      cat: this.category
    }
  },

  watch: {
    modelValue(val) {
      this.modals.categoriesTree = val
    },

    'modals.categoriesTree' (val) {
      this.$emit('update:modelValue', val)
    },

    category (cat) {
      this.cat = cat
    },

    cat(cat) {
      this.$emit('update:category', cat)
    }
  },

  methods: {
    close() {
      this.modals.categoriesTree = false
    }
  }
}
</script>

<style scoped>

</style>