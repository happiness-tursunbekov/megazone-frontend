<template>
  <headings
    :title="$lang.app.stores + ($route.query.q ? ': ' + $route.query.q : '')"
  />
  <div class="categories-page">
    <div class="container-fluid">
      <div class="row">
        <div v-for="(storeItem, key) in stores.data" :key="key" class="col-2">
          <store-item :item="storeItem"/>
        </div><!-- End .col-sm-4 -->
      </div><!-- End .row -->
    </div><!-- End .container-fluid -->
    <div class="mb-3"></div>
  </div>
</template>

<script setup>
import {setTitle, useLang, useUrls} from "../../plugins/globals";
import Headings from "../../components/header/Headings.vue";
import {useAxios} from "../../plugins/vue-axios";
import {reactive, watch} from "vue";
import StoreItem from "../../components/partials/StoreItem.vue";
import {useRoute} from "vue-router";
setTitle(useLang().app.stores)

const axios = useAxios()

const urls = useUrls()

const route = useRoute()

const stores = reactive({
  data: [],
  meta: {}
})

watch(() => route.query.q, () => {
  fetchStores()
})

const fetchStores = async () => {
  await axios.get(urls.stores, {
    params: {
      query: route.query.q || undefined
    }
  }).then(res => {
    stores.data = res.data.data
    stores.meta = res.data.meta
  })
}

await fetchStores()

</script>

<style scoped>

</style>