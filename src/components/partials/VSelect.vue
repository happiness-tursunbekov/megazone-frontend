<style>

</style>
<template>
  <vue-select v-bind="$attrs">
    <template #search="{attributes, events}">
      <input
          class="vs__search"
          :required="required && !$attrs.modelValue"
          v-bind="attributes"
          v-on="events"
      />
    </template>
  </vue-select>
</template>

<script>
import VueSelect from "vue3-select";

export default {
  name: "VSelect",
  components: {VueSelect},
  props: {
    required: Boolean
  }
}
</script>

<style scoped>

</style>