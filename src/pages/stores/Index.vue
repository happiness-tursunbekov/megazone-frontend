<template>
  <headings
    :title="$lang.app.stores"
  />
  <div class="categories-page">
    <div class="container-fluid">
      <div class="row">
        <div v-for="(storeItem, key) in stores.data" :key="key" class="col-2">
          <div class="banner banner-cat banner-badge">
            <router-link :to="{ name: 'stores.show', params: { store: storeItem.slug } }">
              <div style="height: 250px">
                <img :src="storeItem.cover.path" alt="Cover">
              </div>
            </router-link>

            <router-link :to="{ name: 'stores.show', params: { store: storeItem.slug } }" class="banner-link">
              <img :src="storeItem.icon.path" alt="Icon"/>
              <h3 class="banner-title">{{ storeItem.name }}</h3><!-- End .banner-title -->
              <span class="banner-link-text">Shop Now</span>
            </router-link><!-- End .banner-link -->
          </div><!-- End .banner -->
        </div><!-- End .col-sm-4 -->
      </div><!-- End .row -->
    </div><!-- End .container-fluid -->
  </div>
</template>

<script setup>
import {setTitle, useLang, useUrls} from "../../plugins/globals";
import Headings from "../../components/header/Headings.vue";
import {useAxios} from "../../plugins/vue-axios";
import {reactive} from "vue";
setTitle(useLang().app.stores)

const axios = useAxios()

const urls = useUrls()

const stores = reactive({
  data: [],
  meta: {}
})

await axios.get(urls.stores).then(res => {
  stores.data = res.data.data
  stores.meta = res.data.meta
});

</script>

<style scoped>

</style>