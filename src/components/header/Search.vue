<template>
  <div class="header-search header-search-extended header-search-visible header-search-no-radius d-lg-block">
    <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
    <form @submit.prevent="search">
      <div class="header-search-wrapper search-wrapper-wide">
        <div class="select-custom">
          <select id="cat" v-model="form.type">
            <option value="everywhere">{{ lang.app.everywhere }}</option>
            <option value="stores">🛒 {{ lang.app.stores }}</option>
            <option v-for="category in categoriesTree" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div><!-- End .select-custom -->
        <label for="q" class="sr-only">Search</label>
        <input v-model="form.query" type="search" class="form-control" name="q" id="q" placeholder="Search ..." :required="!$route.name.includes('stores.index')">
        <button class="btn btn-primary text-center d-inline-block" type="submit"><i class="icon-search"></i></button>
      </div><!-- End .header-search-wrapper -->
    </form>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useLang} from "../../plugins/globals";
import {reactive} from "vue";
import {useRouter} from "vue-router";

const store = useStore();
await store.dispatch('fetchCategoriesTree')
const categoriesTree = store.getters.categoriesTree
const lang = useLang()
const router = useRouter()

const form = reactive({
  query: '',
  type: 'everywhere'
})
const search = () => {
  if (form.type === 'stores')
    router.push({
      name: 'stores.index',
      query: {
        q: form.query
      }
    })
  else
    router.push({
      name: 'search',
      params: {
        query: form.query,
        type: form.type
      }
    })
}
</script>

<style scoped>

</style>