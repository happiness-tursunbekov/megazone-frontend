<template>
  <div class="body ignore-transition" ref="body" :style="$modal.active ? 'overflow-x: hidden' : ''">
    <Suspense>
    <div class="page-wrapper">
        <vue-snotify/>
        <pace/>
        <site-header/>
        <main class="main">
            <router-view :key="$route.name + '.' + ($route.params.id || '')"/>
        </main>
        <site-footer/>
    </div>
    </Suspense>
  </div>
</template>

<script>
import SiteHeader from "./components/layouts/SiteHeader.vue";
import SiteFooter from "./components/layouts/SiteFooter.vue";
import Pace from "./components/partials/Pace.vue";
import Headings from "./components/header/Headings.vue";
export default {
  components: {Headings, Pace, SiteFooter, SiteHeader},
  mounted() {
    this.$refs.body.classList.remove('ignore-transition')
  },

  watch:{
    $route (to, from){
      if (!import.meta.env.SSR && to.path !== from.path) {
        setTimeout(() => {
          document.getElementsByClassName('body')[0].scrollTo(0, 0);
        })
      }
    }
  }
}
</script>

<style>
@import "assets/css/line-awesome.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/style.css";
@import "assets/css/skin-demo-13.css";
@import "assets/css/demo-13.css";
@import "assets/css/animate.css";
@import "assets/css/snotify.css";
@import "assets/css/vue-select.css";

.body {
  position: absolute;
  top:0;
  right:0;
  left: 0;
  bottom: 0;
  overflow: auto;
  scroll-behavior: smooth;
}

.ignore-transition * {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}
</style>
