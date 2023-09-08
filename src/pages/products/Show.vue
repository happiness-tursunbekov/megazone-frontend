<template>
<div>{{ product.id }}</div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useAxios } from '../../plugins/vue-axios'

export default defineComponent({
  name: 'Show',
  async setup(props, context) {
    const { data } = await useAxios().get("http://127.0.0.1:8000/api/test", {
      params: { id: useRoute().params.id }
    })
    return { product: data }
  }
})

</script>

<style scoped>

</style>