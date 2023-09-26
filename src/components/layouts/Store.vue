<template>
  <div v-if="item.name" class="container-fluid">
    <div class="store-header text-center" :style="{ backgroundImage: 'url(\'' + item.cover.path + '\')' }">

    </div>
  </div>
  <div style="border-bottom: 0.1rem solid rgba(235, 235, 235, 0.55)">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="social-icons social-icons-colored justify-content-start" style="height:100%; vertical-align: middle">
            <router-link :to="{ name: 'stores.edit', params: { store: item.slug } }" class="social-icon" :title="lang.app.edit"><i class="icon-edit"></i></router-link>
            <router-link :to="{ name: 'stores.products.create', params: { store: item.slug } }" class="btn btn-outline-success" :title="lang.app.addProduct"><i class="icon-plus"></i>
              {{ lang.app.addProduct }}</router-link>
          </div>
        </div>
        <div class="col">
          <div class="store-title">
            <div style="margin-bottom: 0">
              <img alt="logo" class="store-icon" :src="item.icon.path"/>
              <div style="display: inline-block">
                <h3 style="margin-bottom: 0;text-align: left">
                  {{ item.name }}
                </h3>
                <span>{{ item.slogan }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="social-icons social-icons-colored justify-content-end" style="height:100%; vertical-align: middle">
            <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
            <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
            <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
            <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
            <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
          </div>
        </div>
      </div>
    </div><!-- End .container-fluid -->
  </div>
  <router-view :key="route.name + '.' + (route.params.id || '') + '.' + lang.$current"/>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, watch} from "vue";
import {useRoute} from "vue-router";
import {useLang} from "../../plugins/globals";

const store = useStore()

const lang = useLang()

const route = useRoute()

await store.dispatch('fetchStore', useRoute().params.store);

const item = computed(() => store.getters.store);
</script>

<style scoped>
.store-title span {
  font-weight: normal;
  display: inline-block;
  font-size: 1.6rem;
  text-align: left;
}
.store-title {
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
}
.store-header {
  height: 140px;
  position: relative;
  background-size: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.store-header:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.store-header:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(127, 127, 127, 0.1) radial-gradient(#333333 11%, transparent 11%);
  background-size: 3px 3px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.store-icon {
  width: 64px;
  height: 64px;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
}
</style>