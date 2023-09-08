<template>
  <div class="widget widget-categories">
    <h3 class="widget-title">
      {{ $lang.app.categories }}
      <router-link :to="{ name: 'stores.settings.categories.index', params: { store: slug } }" :title="$lang.app.settings"><i class="icon-cog"></i></router-link>
    </h3><!-- End .widget-title -->

    <div class="widget-body">
      <store-category-tree
          v-model:categories="categories"
      />
    </div><!-- End .widget-body -->
  </div>
</template>

<script>
import StoreCategoryTree from "./StoreCategoryTree.vue";
export default {
  name: "StoreCategories",
  components: {StoreCategoryTree},
  computed: {
    categories() {
      return this.$store.getters.store.categories
    },
    slug() {
      return this.$store.getters.store.slug
    }
  },
  data() {
    return {
      open: null
    }
  }
}
</script>

<style scoped>

</style>