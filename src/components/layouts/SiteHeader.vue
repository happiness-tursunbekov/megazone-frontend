<template>
  <header class="header header-10 header-intro-clearance">
    <div class="header-top">
      <div class="container-fluid">
        <div class="header-left">
          <a href="tel:#"><i class="icon-phone"></i>Call: +0123 456 789</a>
        </div><!-- End .header-left -->

        <div class="header-right">

          <ul class="top-menu">
            <li>
              <a href="#">Links</a>
              <ul class="top-menu-ul">
                <li>
                  <div class="header-dropdown">
                    <a href="#">{{ lang.app.myStore }}</a>
                    <div class="header-menu">
                      <ul class="top-menu-ul">
                        <li v-for="item in user.stores" :key="item.id">
                          <router-link :to="{ name: 'stores.show', params: { store: item.slug } }"><i class="icon icon-shopping-cart"></i> {{ item.name }}</router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'stores.create' }"><i class="la la-plus"></i>{{ $lang.app.addStore }}</router-link>
                        </li>
                      </ul>
                    </div><!-- End .header-menu -->
                  </div><!-- End .header-dropdown -->
                </li>
                <li>
                  <div class="header-dropdown">
                    <a href="#">USD</a>
                    <div class="header-menu">
                      <ul class="top-menu-ul">
                        <li><a href="#">Eur</a></li>
                        <li><a href="#">Usd</a></li>
                      </ul>
                    </div><!-- End .header-menu -->
                  </div><!-- End .header-dropdown -->
                </li>
                <li>
                  <div class="header-dropdown">
                    <a href="#">{{ lang.$current }}</a>
                    <div class="header-menu">
                      <ul class="top-menu-ul">
                        <li v-for="locale in lang.list" :key="locale"><a @click.prevent="$lang.$setLang(locale)" href="#">{{ locale }}</a></li>
                      </ul>
                    </div><!-- End .header-menu -->
                  </div><!-- End .header-dropdown -->
                </li>
                <auth/>
              </ul>
            </li>
          </ul><!-- End .top-menu -->
        </div><!-- End .header-right -->
      </div><!-- End .container-fluid -->
    </div><!-- End .header-top -->

    <div class="header-middle">
      <div class="container-fluid">
        <div class="col-md-4 col-lg-3 col-xl-3 col-xxl-2">
          <router-link :to="{ name: 'home' }" class="logo" style="max-width: 100%">
            <img src="../../assets/images/logo.png" alt="Megazone Logo">
          </router-link>
        </div><!-- End .header-left -->

        <div class="col-md-4 col-lg-6 col-xl-6 col-xxl-8">
          <search/>
        </div>

        <div class="header-right">
          <div class="header-dropdown-link">
            <compare/>

            <a href="wishlist.html" class="wishlist-link">
              <i class="icon-heart-o"></i>
              <span class="wishlist-count">3</span>
              <span class="wishlist-txt">Wishlist</span>
            </a>

            <cart/>
          </div>
        </div><!-- End .header-right -->
      </div><!-- End .container-fluid -->
    </div><!-- End .header-middle -->

    <div class="header-bottom">
      <div class="container-fluid">
        <div class="row w-100">
          <div class="col-auto col-lg-3 col-xl-3 col-xxl-2">
            <categories-menu/>
          </div><!-- End .col-lg-3 -->
          <div class="col col-lg-6 col-xl-6 col-xxl-8 header-center">
            <nav class="main-nav">
              <ul class="menu sf-arrows">
                <li :class="{ active: $route.name === 'home' }">
                  <router-link :to="{ name: 'home' }" class="sf-with">{{ lang.app.home }}</router-link>
                </li>
                <li :class="{ active: $route.name.includes('stores.') }">
                  <router-link :to="{ name: 'stores.index' }" class="sf-with"><i class="icon icon-shopping-cart"></i> {{ lang.app.stores }}</router-link>
                </li>
              </ul><!-- End .menu -->
            </nav><!-- End .main-nav -->
          </div><!-- End .col-lg-9 -->
          <div class="col col-lg-3 col-xl-3 col-xxl-2 header-right">
            <i class="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</p>
          </div>
        </div>
      </div><!-- End .container-fluid -->
    </div><!-- End .header-bottom -->
  </header>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import {useLang} from "../../plugins/globals";
import {useStore} from "vuex";

const CategoriesMenu = defineAsyncComponent(() => import('../header/CategoriesMenu.vue'))
const Search = defineAsyncComponent(() => import('../header/Search.vue'))
const Cart = defineAsyncComponent(() => import('../header/Cart.vue'))
const Compare = defineAsyncComponent(() => import('../header/Compare.vue'))
const Stores = defineAsyncComponent(() => import('../header/menu/Stores.vue'))
const Auth = defineAsyncComponent(() => import('../header/Auth.vue'))

const user = useStore().getters.user

const lang = useLang()
</script>

<style scoped>

</style>