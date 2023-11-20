<template>
  <div v-if="title && !isStore" class="page-header text-center" style="background-image: url('/src/assets/images/page-header-bg.jpg')">
    <div class="container-fluid">
      <h1 class="page-title">{{ title }}</h1>
    </div><!-- End .container-fluid -->
  </div>
  <nav class="breadcrumb-nav mb-3">
    <div v-if="breadcrumbs && breadcrumbs.length > 0" class="container-fluid">
      <ol class="breadcrumb">
        <li v-for="(breadcrumb, key) in breadcrumbs" :key="key" class="breadcrumb-item" :class="{ active: !breadcrumb.route }">
          <router-link v-if="breadcrumb.route" :to="breadcrumb.route">{{ breadcrumb.label }}</router-link>
          <span v-else>{{ breadcrumb.label }}</span>
        </li>
      </ol>
    </div><!-- End .container -->
  </nav>
</template>

<script setup>
import {setTitle} from "../../plugins/globals";
import {watch} from "vue";

const props = defineProps({
  title: String,
  breadcrumbs: Array,
  isStore: Boolean
})

if (props.title) {
  setTitle(props.title)
}

watch(() => props.title, val => {
  setTitle(val)
})
</script>

<style scoped>

</style>