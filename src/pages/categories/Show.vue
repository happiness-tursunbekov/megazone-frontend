<template>
  <headings
      :breadcrumbs="breadcrumbs"
      :title="category.name"
  />

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3">
        <store-category-filter :category="category" :query="items.query" @change="fetchItems"/>
      </div>
      <div class="col-lg-9">
        <pagination :pagination="items.meta" :query="items.query" @change="fetchItems">
          <div class="products mb-3">
            <div class="row">
              <div v-for="product in items.data" :key="product.id" class="col-6 col-md-4 col-xl-3 col-xxl-2">
                <product :item="product"/>
              </div><!-- End .col-sm-6 col-md-4 col-xl-3 -->
            </div><!-- End .row -->
          </div>
        </pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useLang, useUrls} from "../../plugins/globals";
import {useRoute, useRouter} from "vue-router";
import {useAxios} from "../../plugins/vue-axios";
import StoreCategoryFilter from "../../components/partials/filter/StoreCategoryFilter.vue";
import Pagination from "../../components/partials/Pagination.vue";
import Product from "../../components/partials/Product.vue";
import {reactive} from "vue";
import Headings from "../../components/header/Headings.vue";

const route = useRoute()
const router = useRouter()

const category = (await useAxios().get(useUrls().category.replace(':id', route.params.id))).data

const breadcrumbs = [
  {
    label: useLang().app.home,
    route: {
      name: 'home'
    }
  },
  ...(category.parents.length > 0 ? category.parents.map(cat => ({
    label: cat.name,
    route: {
      name: 'categories.show',
      params: {
        id: cat.id
      }
    }
  })) : []),
  {
    label: category.name
  }
]

const items = reactive({
  data: [],
  meta: {},
  query: {
    categoryId: route.params.id,
    categories: route.query.categories || [],
    sortBy: route.query.sortBy || '',
    page: route.query.page || '',
    colorId: route.query.colorId || '',
    sizeIds: route.query.sizeIds || [],
    brandIds: route.query.brandIds || [],
    priceFrom: route.query.priceFrom || '',
    priceTo: route.query.priceTo || '',
  }
})

const fetchItems = async (query) => {
  items.query = { ...items.query, ...query }
  const res = (await useAxios().get(useUrls().products, {
    params: items.query
  }))
  for(let key in query)
    if (!query[key])
      delete query[key]
  delete query.categoryId
  router.push({
    query: query
  }).catch(() => {})
  items.data = res.data.data
  items.meta = res.data.meta
}

await fetchItems(items.query)
</script>

<style scoped>

</style>