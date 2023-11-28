<template>
  <div class="mb-3"></div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9 col-xl-4-5col">
        <large-carousel/>

        <div class="mb-3 mb-lg-5"></div><!-- End .mb-3 mb-lg-5 -->

        <h2 class="title title-border">{{ $lang.app.products }}</h2><!-- End .title -->

        <div class="row">
          <div v-for="product in products.data" :key="product.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
            <product :item="product"/>
          </div><!-- End .col-sm-6 col-md-4 col-xl-3 -->
        </div>

        <div class="mb-4"></div>

      </div><!-- End .col-lg-9 -->

      <aside class="col-lg-3 col-xl-5col order-lg-first">
        <div class="sidebar sidebar-shop">
          <store-categories/>

          <div class="widget widget-banner-sidebar">
            <div class="banner-sidebar-title">ad banner 218 x 430px</div><!-- End .ad-title -->

            <div class="banner-sidebar banner-overlay">
              <a href="#">
                <img src="../../assets/images/demos/demo-13/banners/banner-6.jpg" alt="banner">
              </a>
            </div><!-- End .banner-ad -->
          </div><!-- End .widget -->
        </div><!-- End .sidebar sidebar-shop -->
      </aside><!-- End .col-lg-3 -->
    </div><!-- End .row -->
  </div>
</template>

<script setup>
import {useAxios} from "../../plugins/vue-axios";
import {useRoute} from "vue-router";
import LargeCarousel from "../../components/partials/LargeCarousel.vue";
import {setTitle, useUrls} from "../../plugins/globals";
import {useStore} from "vuex";
import {reactive} from "vue";
import StoreCategories from "../../components/stores/StoreCategories.vue";
import Color from "../../components/partials/filter/Color.vue";
import CustomerRating from "../../components/partials/filter/CustomerRating.vue";
import Price from "../../components/partials/filter/Price.vue";
import Brand from "../../components/partials/filter/Brand.vue";
import Product from "../../components/stores/Product.vue";

const axios = useAxios();
const route = useRoute();

const store = useStore();

const item = await useStore().dispatch('fetchStore', useRoute().params.store)

const products = reactive({
  data: [],
  meta: {}
})

const fetchProducts = async () => {
  const res = await axios.get(useUrls().storeProducts.replace(':storeId', item.id))
  products.data = res.data.data
  products.meta = res.data.meta
}

setTitle(item.name)

await fetchProducts()
</script>

<style scoped>

</style>