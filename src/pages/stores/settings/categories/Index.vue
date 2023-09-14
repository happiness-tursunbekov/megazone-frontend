<template>
  <headings
      :breadcrumbs="breadcrumbs"
      is-store
  />

  <div class="container-fluid">
    <div class="row">
      <div class="col-xxl-4">
        <store-categories/>
      </div>
    </div>
  </div>

</template>

<script setup>
import Headings from "../../../../components/header/Headings.vue";
import {useLang} from "../../../../plugins/globals";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import StoreCategories from "../../../../components/stores/settings/StoreCategories.vue";

const store = useStore()

const route = useRoute()

const item = await store.dispatch('fetchStore', route.params.store)

const lang = useLang()

const breadcrumbs = [
  {
    label: lang.app.stores,
    route: {
      name: 'stores.index'
    }
  },
  {
    label: item.name,
    route: {
      name: 'stores.show',
      params: {
        store: item.slug
      }
    }
  },
  {
    label: lang.app.settings,
    route: {
      name: 'stores.settings.index',
      params: {
        store: item.slug
      }
    }
  },
  {
    label: lang.app.categories
  }
]

</script>

<style scoped>

</style>