<template>
  <div class="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
    <a href="#" class="search-toggle" role="button"><i class="icon-search"></i></a>
    <form action="#" method="get">
      <div class="header-search-wrapper search-wrapper-wide">
        <div class="select-custom">
          <select id="cat">
            <option value="">{{ lang.app.allCategories }}</option>
            <option value="stores">🛒 {{ lang.app.stores }}</option>
            <option v-for="category in categoriesTree" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div><!-- End .select-custom -->
        <label for="q" class="sr-only">Search</label>
        <input type="search" class="form-control" name="q" id="q" placeholder="Search product ..." required>
        <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
      </div><!-- End .header-search-wrapper -->
    </form>
  </div>
</template>

<script setup>
import {useStore} from "vuex";
import {useLang} from "../../plugins/globals";

const store = useStore();
await store.dispatch('fetchCategoriesTree')
const categoriesTree = store.getters.categoriesTree
const lang = useLang()
</script>

<style scoped>

</style>