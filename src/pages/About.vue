<template>
  <h1>{{ product.title }}</h1>
  <h1>{{ store.getters.user }}</h1>
</template>

<script>
import { useRoute } from 'vue-router'
import { useAxios } from '../plugins/vue-axios'
import { useStore } from 'vuex'
export default {
  async setup() {
    const store = useStore();
    const { data } = await useAxios().get("http://127.0.0.1:8000/api/test", {
      params: { id: useRoute().params.id }
    })
    return { product: data, store }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
