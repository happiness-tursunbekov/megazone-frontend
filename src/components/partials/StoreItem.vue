<template>
  <div class="banner banner-cat banner-badge">
    <router-link :to="{ name: 'stores.show', params: { store: item.slug } }">
      <div style="height: 250px">
        <img :src="item.cover.path" alt="Cover" class="h-100" style="filter: blur(3px)">
      </div>
    </router-link>

    <router-link :to="{ name: 'stores.show', params: { store: item.slug } }" class="banner-link">
      <img :src="item.icon.path" alt="Icon"/>
      <h3 class="banner-title">{{ item.name }}</h3><!-- End .banner-title -->
      <span class="banner-link-text">Shop Now</span>
    </router-link><!-- End .banner-link -->
  </div><!-- End .banner -->
</template>

<script>
export default {
  name: "StoreItem",

  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>