<template>
  <div class="container-fluid">
    <div class="intro-slider-container offset-lg-3 offset-xxl-2">
      <large-carousel type="intro-slide"/>
    </div>
  </div>

  <div class="mb-4"></div><!-- End .mb-2 -->

  <div class="container-fluid">
    <h2 class="title text-center mb-2">Explore Popular Categories</h2><!-- End .title -->

    <div class="cat-blocks-container-fluid">
      <div class="row">
        <div v-for="(cat,key) in popularCategories" :key="key" class="col-6 col-sm-4 col-lg-2">
          <category :item="cat"/>
        </div><!-- End .col-sm-4 col-lg-2 -->
      </div><!-- End .row -->
    </div><!-- End .cat-blocks-container-fluid -->
  </div><!-- End .container-fluid -->

  <div class="mb-2"></div><!-- End .mb-2 -->

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="banner banner-overlay">
          <a href="#">
            <img src="../assets/images/demos/demo-13/banners/banner-1.jpg" alt="Banner">
          </a>

          <div class="banner-content">
            <h4 class="banner-subtitle text-white"><a href="#">Weekend Sale</a></h4><!-- End .banner-subtitle -->
            <h3 class="banner-title text-white"><a href="#">Lighting <br>& Accessories <br><span>25% off</span></a></h3><!-- End .banner-title -->
            <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
          </div><!-- End .banner-content -->
        </div><!-- End .banner -->
      </div><!-- End .col-lg-3 -->

      <div class="col-sm-6 col-lg-3 order-lg-last">
        <div class="banner banner-overlay">
          <a href="#">
            <img src="../assets/images/demos/demo-13/banners/banner-3.jpg" alt="Banner">
          </a>

          <div class="banner-content">
            <h4 class="banner-subtitle text-white"><a href="#">Smart Offer</a></h4><!-- End .banner-subtitle -->
            <h3 class="banner-title text-white"><a href="#">Anniversary <br>Special <br><span>15% off</span></a></h3><!-- End .banner-title -->
            <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
          </div><!-- End .banner-content -->
        </div><!-- End .banner -->
      </div><!-- End .col-lg-3 -->

      <div class="col-lg-6">
        <div class="banner banner-overlay">
          <a href="#">
            <img src="../assets/images/demos/demo-13/banners/banner-2.jpg" alt="Banner">
          </a>

          <div class="banner-content">
            <h4 class="banner-subtitle text-white d-none d-sm-block"><a href="#">Amazing Value</a></h4><!-- End .banner-subtitle -->
            <h3 class="banner-title text-white"><a href="#">Clothes Trending <br>Spring Collection 2019 <br><span>from $12,99</span></a></h3><!-- End .banner-title -->
            <a href="#" class="banner-link">Discover Now <i class="icon-long-arrow-right"></i></a>
          </div><!-- End .banner-content -->
        </div><!-- End .banner -->
      </div><!-- End .col-lg-6 -->
    </div><!-- End .row -->
  </div><!-- End .container-fluid -->

  <div class="mb-3"></div><!-- End .mb-3 -->

  <div class="bg-light pt-3 pb-5">
    <div class="container-fluid electronics">
      <div class="heading heading-flex heading-border mb-3">
        <div class="heading-left">
          <h2 class="title">Hot Deals Products</h2><!-- End .title -->
        </div><!-- End .heading-left -->
      </div><!-- End .heading -->

      <div class="tab-content">
        <div class="row">
          <div v-for="(product,key) in newProducts" :key="key" class="col-md-2">
            <product :item="product"/>
          </div>
        </div>
      </div><!-- End .tab-content -->
    </div><!-- End .container-fluid -->
  </div><!-- End .bg-light pt-5 pb-5 -->

  <div class="mb-3"></div><!-- End .mb-3 -->

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="banner banner-overlay banner-overlay-light">
          <a href="#">
            <img src="../assets/images/demos/demo-13/banners/banner-4.jpg" alt="Banner">
          </a>

          <div class="banner-content">
            <h4 class="banner-subtitle d-none d-sm-block"><a href="#">Spring Sale is Coming</a></h4><!-- End .banner-subtitle -->
            <h3 class="banner-title"><a href="#">All Smart Watches <br>Discount <br><span class="text-primary">15% off</span></a></h3><!-- End .banner-title -->
            <a href="#" class="banner-link banner-link-dark">Discover Now <i class="icon-long-arrow-right"></i></a>
          </div><!-- End .banner-content -->
        </div><!-- End .banner -->
      </div><!-- End .col-lg-6 -->

      <div class="col-lg-6">
        <div class="banner banner-overlay">
          <a href="#">
            <img src="../assets/images/demos/demo-13/banners/banner-5.png" alt="Banner">
          </a>

          <div class="banner-content">
            <h4 class="banner-subtitle text-white  d-none d-sm-block"><a href="#">Amazing Value</a></h4><!-- End .banner-subtitle -->
            <h3 class="banner-title text-white"><a href="#">Headphones Trending <br>JBL Harman <br><span>from $59,99</span></a></h3><!-- End .banner-title -->
            <a href="#" class="banner-link">Discover Now <i class="icon-long-arrow-right"></i></a>
          </div><!-- End .banner-content -->
        </div><!-- End .banner -->
      </div><!-- End .col-lg-6 -->
    </div><!-- End .row -->
  </div><!-- End .container-fluid -->

  <div class="mb-3"></div><!-- End .mb-3 -->

  <template v-for="(category,key) in categoryNewProducts">
    <div v-if="category.products.length > 0" :key="key" class="bg-light pt-3 pb-5">
      <div class="container-fluid electronics">
        <div class="heading heading-flex heading-border mb-3">
          <div class="heading-left">
            <h2 class="title">{{ category.name }}</h2><!-- End .title -->
          </div><!-- End .heading-left -->
        </div><!-- End .heading -->

        <div class="tab-content">
          <div class="row">
            <div v-for="(product,key) in category.products" :key="key" class="col-md-2">
              <product :item="product"/>
            </div>
          </div>
        </div><!-- End .tab-content -->
      </div><!-- End .container-fluid -->
    </div><!-- End .bg-light pt-5 pb-5 -->
  </template>

  <div class="mb-3"></div><!-- End .mb-3 -->
</template>

<script>
import LargeCarousel from "../components/partials/LargeCarousel.vue";
import {setTitle, useUrls} from "../plugins/globals";
import Product from "../components/partials/Product.vue";
import {useAxios} from "../plugins/vue-axios";
import Category from "../components/partials/Category.vue";
export default {
  components: {Category, Product, LargeCarousel},

  async setup() {
    const res = await useAxios().get(useUrls().home)

    return {
      popularCategories: res.data.popularCategories,
      newProducts: res.data.newProducts,
      categoryNewProducts: res.data.categoryNewProducts
    }
  },

  created() {
    setTitle(this.$config.slogan)
  }
}
</script>

<style scoped>
  h1,
  a {
    color: green;
  }
</style>
