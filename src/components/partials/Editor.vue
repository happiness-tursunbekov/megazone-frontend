<template>
  <textarea id="editor" class="form-control" v-model="val"></textarea>
</template>

<script>

export default {
  props: {
    modelValue: [String,null]
  },

  data() {
    return {
      val: ''
    }
  },

  watch: {
    val(val) {
      this.$emit('update:modelValue', val)
    },

    modelValue(val) {
      this.val = val
    }
  },

  created() {
    this.val = this.modelValue
  }
}
</script>