<template>
  <div v-if="item.name" class="container-fluid">
    <div class="store-header text-center" :style="{ backgroundImage: 'url(\'' + item.cover.path + '\')' }"></div>
  </div>
  <div style="border-bottom: 0.1rem solid rgba(235, 235, 235, 0.55)">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="social-icons justify-content-start" style="height:100%; vertical-align: middle">
            <a href="#" @click.prevent="modals.address=true" class="social-icon" :title="$lang.app.location"><i class="icon-map-marker"></i></a>
            <template v-if="store.getters.isStoreAdmin">
              <router-link :to="{ name: 'stores.products.create', params: { store: item.slug } }" class="btn btn-outline-success" :title="lang.app.addProduct"><i class="icon-plus"></i>{{ lang.app.addProduct }}</router-link>
              <router-link :to="{ name: 'stores.edit', params: { store: item.slug } }" class="btn btn-outline-primary" :title="lang.app.edit"><i class="icon-edit"></i> Edit store</router-link>
            </template>
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
          <social-media/>
        </div>
      </div>
    </div><!-- End .container-fluid -->
  </div>
  <modal v-model="modals.address">
    <div class="p-3">
      {{ item.address.fullPath }}
    </div>
  </modal>
  <router-view :key="route.name + '.' + (route.params.id || '') + '.' + lang.$current"/>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, reactive, watch} from "vue";
import {useRoute} from "vue-router";
import {useLang} from "../../plugins/globals";
import SocialMedia from "../stores/SocialMedia.vue";
import Modal from "../partials/Modal.vue";

const store = useStore()

const lang = useLang()

const route = useRoute()

await store.dispatch('fetchStore', useRoute().params.store);

const item = computed(() => store.getters.store);

const modals = reactive({
  address: false
})
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