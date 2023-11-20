<template>
  <router-link :to="{ name: 'categories.show', params: { id: item.id } }" class="cat-block">
    <figure>
      <span><img :src="item.icon.path" alt="Category image" style="max-width: 100%;max-height: 100px"></span>
    </figure>

    <h3 class="cat-block-title">{{ item.name }}</h3><!-- End .cat-block-title -->
  </router-link>
</template>

<script>
export default {
  name: "Category",
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>