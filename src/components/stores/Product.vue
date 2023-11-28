<template>
  <div class="product">
    <figure class="product-media">
      <span v-if="item.sale" class="product-label label-sale">-{{ item.sale }}%</span>
      <span v-if="item.new" class="product-label label-new">New</span>
      <router-link :to="{ name: 'stores.products.show', params: { id: item.id } }">
        <img :src="item.files[0].path" alt="Product image" class="product-image">
      </router-link>

      <div class="product-action-vertical">
        <a @click.prevent="$cart.addToWishlist(item, $store.getters.store)" href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
      </div><!-- End .product-action-vertical -->

      <div class="product-action">
        <a @click.prevent="$cart.addItem($store.getters.store, item)" href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
      </div><!-- End .product-action -->
    </figure><!-- End .product-media -->

    <div class="product-body">
      <div class="product-cat">
        <router-link :to="{ name: 'stores.categories.show', params: { id: item.category.id } }">{{ item.category.name }}</router-link>
      </div><!-- End .product-cat -->
      <h3 class="product-title"><router-link :to="{ name: 'stores.products.show', params: { id: item.id } }">{{ item.title }}</router-link></h3><!-- End .product-title -->
      <div class="product-price">
        <span class="new-price">${{ item.price }}</span>
        <span v-if="item.sale" class="old-price">Was ${{ item.oldPrice }}</span>
      </div><!-- End .product-price -->
      <div v-if="item.numberOfReviews > 0" class="ratings-container">
        <div class="ratings">
          <div class="ratings-val" :style="{ width: (item.rating * 100 / 5) + '%' }"></div><!-- End .ratings-val -->
        </div><!-- End .ratings -->
        <span class="ratings-text">( {{ item.numberOfReviews }} Review(s) )</span>
      </div><!-- End .rating-container -->

      <div v-if="item.colors.length > 1" class="product-nav product-nav-dots">
        <a v-for="color in item.colors" :key="color.id" href="#" :style="{ background: color.addition }"><span class="sr-only">{{ color.title }}</span></a>
      </div><!-- End .product-nav -->
    </div><!-- End .product-body -->
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style scoped>
  .product-media {
    min-height: 200px;
  }
</style>