<template>
  <label class="form-label">{{ properties.name }}<span v-if="properties.required" class="text-danger">*</span></label>
  <div class="input-group">
    <input v-if="properties.type === 'text'" type="text" v-model="val" class="form-control" :required="properties.required"/>
    <input v-else-if="properties.type === 'number'" min="0" type="number" v-model="val" class="form-control" :required="properties.required"/>
    <input v-else-if="properties.type === 'float'" min="0" step="0.01" type="number" v-model="val" class="form-control" :required="properties.required"/>
    <select v-else-if="properties.type === 'select'" v-model="val" class="form-control" :required="properties.required">
      <option v-for="(option, key) in properties.options" :key="key" :value="option.id || option">{{ option.title || option }}</option>
    </select>
    <div v-if="properties.addon" class="input-group-append">
      <span class="input-group-text">{{ properties.addon }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    modelValue: [Number, String, Object],
    properties: Object
  },

  emits: ['update:modelValue'],

  data() {
    return {
      val: this.modelValue || ''
    }
  },

  watch: {
    val(val) {
      this.$emit('update:modelValue', val)
    },

    modelValue(val) {
      this.val = val
    }
  }
}
</script>

<style scoped>

</style>