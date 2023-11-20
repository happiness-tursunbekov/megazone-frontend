<template>
  <headings :title="'Results for: ' + $route.params.query.toString()"/>
  <div class="container-fluid">
    <template v-if="categories.length > 0">
      <h2 class="title title-border">{{ $lang.app.categories }}</h2><!-- End .title -->

      <div class="row">
        <div v-for="cat in categories" :key="cat.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
          <category :item="cat"/>
        </div><!-- End .col-sm-6 col-md-4 col-xl-3 -->
      </div>
      <div class="mb-3"></div>
    </template>

    <template v-if="stores.length > 0">
      <h2 class="title title-border">{{ $lang.app.stores }}</h2><!-- End .title -->

      <div class="row">
        <div v-for="storeItem in stores" :key="storeItem.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
          <store-item :item="storeItem"/>
        </div><!-- End .col-sm-6 col-md-4 col-xl-3 -->
      </div>
      <div class="mb-3"></div>
    </template>

    <h2 class="title title-border">{{ $lang.app.products }}</h2><!-- End .title -->

    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
        <product :item="product"/>
      </div><!-- End .col-sm-6 col-md-4 col-xl-3 -->
      <div v-if="products.length === 0" class="col-12">
        Your search - <b>{{ params.query }}</b> - did not match any item.
      </div>
    </div>

    <div class="mb-3"></div>
  </div>
</template>

<script>
import Headings from "../components/header/Headings.vue";
import Product from "../components/partials/Product.vue";
import StoreItem from "../components/partials/StoreItem.vue";
import Category from "../components/partials/Category.vue";

export default {
  name: "Search",
  components: {Category, StoreItem, Product, Headings},

  data() {
    return {
      products: [],
      categories: [],
      stores: [],
      meta: {}
    }
  },

  computed: {
    params() {
      return this.$route.params
    }
  },

  watch: {
    'params.query' (query) {
      if (query)
        this.fetchResult()
    },
    'params.type' (type) {
      if (type)
        this.fetchResult()
    }
  },

  mounted() {
    this.fetchResult();
  },

  methods: {
    fetchResult() {
      return this.axios.get(this.$urls.search, {
        params: {
          query: this.$route.params.query,
          categoryId: this.$route.params.type !== 'everywhere' ? this.$route.params.type : ''
        }
      }).then(res => {
        this.products = res.data.data;
        this.meta = res.data.meta;
        this.categories = res.data.categories;
        this.stores = res.data.stores;
      })
    }
  }
}
</script>

<style scoped>

</style>