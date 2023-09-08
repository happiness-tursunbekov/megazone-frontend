<template>
  <div class="intro-slider">
    <carousel :autoplay="5000" wrap-around pause-autoplay-on-hover>
      <slide :key="0">
        <div :class="'w-100 ' + type" style="background-image: url(/src/assets/images/demos/demo-13/slider/slide-1.png);">
          <div class="container-fluid intro-content" :class="{ 'p-5': !type }">
            <div class="row">
              <div class="col-auto offset-lg-1 intro-col">
                <h3 class="intro-subtitle">Trade-In Offer</h3><!-- End .h3 intro-subtitle -->
                <h1 class="intro-title">MacBook Air <br>Latest Model
                  <span>
                                            <sup class="font-weight-light">from</sup>
                                            <span class="text-primary">$999<sup>,99</sup></span>
                                        </span>
                </h1><!-- End .intro-title -->

                <a href="category.html" class="btn btn-outline-primary-2">
                  <span>Shop Now</span>
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div><!-- End .col-auto offset-lg-3 -->
            </div><!-- End .row -->
          </div><!-- End .container-fluid intro-content -->
        </div>
      </slide>
      <slide :key="1">
        <div :class="'w-100 ' + type" class="w-100" style="background-image: url(/src/assets/images/demos/demo-13/slider/slide-2.jpg);">
          <div class="container-fluid intro-content" :class="{ 'p-5': !type }">
            <div class="row">
              <div class="col-auto offset-lg-1 intro-col">
                <h3 class="intro-subtitle">Trevel & Outdoor</h3><!-- End .h3 intro-subtitle -->
                <h1 class="intro-title">Original Outdoor <br>Beanbag
                  <span>
                                            <sup class="font-weight-light line-through">$89,99</sup>
                                            <span class="text-primary">$29<sup>,99</sup></span>
                                        </span>
                </h1><!-- End .intro-title -->

                <a href="category.html" class="btn btn-outline-primary-2">
                  <span>Shop Now</span>
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div><!-- End .col-auto offset-lg-3 -->
            </div><!-- End .row -->
          </div><!-- End .container-fluid intro-content -->
        </div>
      </slide>
      <slide :key="2">
        <div :class="'w-100 ' + type" class="w-100" style="background-image: url(/src/assets/images/demos/demo-13/slider/slide-3.jpg);">
          <div class="container-fluid intro-content" :class="{ 'p-5': !type }">
            <div class="row">
              <div class="col-auto offset-lg-1 intro-col">
                <h3 class="intro-subtitle">Fashion Promotions</h3><!-- End .h3 intro-subtitle -->
                <h1 class="intro-title">Tan Suede <br>Biker Jacket
                  <span>
                                            <sup class="font-weight-light line-through">$240,00</sup>
                                            <span class="text-primary">$180<sup>,99</sup></span>
                                        </span>
                </h1><!-- End .intro-title -->

                <a href="category.html" class="btn btn-outline-primary-2">
                  <span>Shop Now</span>
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div><!-- End .col-auto offset-lg-3 -->
            </div><!-- End .row -->
          </div><!-- End .container-fluid intro-content -->
        </div>
      </slide>

      <template #addons>
        <navigation/>
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: "LargeCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    type: String
  }
}
</script>

<style>
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: #39f;
}
</style>