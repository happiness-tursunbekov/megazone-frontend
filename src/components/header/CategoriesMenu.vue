<template>
  <div class="dropdown category-dropdown" data-visible="true">
    <a href="javascript:void(0)" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
      Категории
    </a>

    <div class="dropdown-menu" :class="{ 'show': $route.name === 'home' }">
      <nav class="side-nav">
        <ul class="menu-vertical sf-arrows">
          <li v-for="category in categoriesTree" :key="category.id" class="megamenu-container-fluid">
            <router-link class="sf-with-ul" :to="{ name: 'categories.show', params: { id: category.id } }">{{ category.name }}</router-link>

            <div class="megamenu">
              <div class="row no-gutters">
                <div class="col-md-8">
                  <div class="menu-col">
                    <div class="row">
                      <div v-for="child in category.children" :key="child.id" class="col-md-4">
                        <div class="menu-title">
                          <router-link :to="{ name: 'categories.show', params: { id: child.id } }">{{ child.name }}</router-link>
                        </div><!-- End .menu-title -->
                        <ul>
                          <li v-for="child1 in child.children" :key="child1.id">
                            <router-link :to="{ name: 'categories.show', params: { id: child1.id } }">{{  child1.name }}</router-link>
                          </li>
                        </ul>
                      </div><!-- End .col-md-6 -->
                    </div><!-- End .row -->
                  </div><!-- End .menu-col -->
                </div><!-- End .col-md-8 -->

                <div class="col-md-4">
                  <div class="banner banner-overlay">
                    <a href="category.html" class="banner banner-menu">
                      <img src="../../assets/images/demos/demo-13/menu/banner-1.jpg" alt="Banner">
                    </a>
                  </div><!-- End .banner banner-overlay -->
                </div><!-- End .col-md-4 -->
              </div><!-- End .row -->
            </div><!-- End .megamenu -->
          </li>
        </ul><!-- End .menu-vertical -->
      </nav><!-- End .side-nav -->
    </div><!-- End .dropdown-menu -->
  </div>
</template>

<script setup>
import { useStore } from "vuex"
    const store = useStore();
    await store.dispatch('fetchCategoriesTree')
    const categoriesTree = store.getters.categoriesTree
</script>

<style scoped>
.show {
  visibility: visible !important;
}
</style>