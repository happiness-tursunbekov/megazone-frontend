<template>
  <div class="form-group">
    <div class="form-check">
      <input v-model="hasSize" @click="showModal" class="form-check-input" type="checkbox" id="has-size">
      <label class="form-check-label" for="has-size">
        {{ $lang.app.hasSize }}
      </label>
      <span v-if="fieldId && fields.length > 0"> ({{ fields.filter(field => field.id === fieldId)[0].name }})</span>
    </div>
    <modal
      v-model="modal"
      :modal-title="$lang.app.selectSizeField"
      disable-backdrop-close
    >
      <div class="p-2">
        <v-select
            v-model="fieldId"
            :options="fields"
            label="name"
            :reduce="option => option.id"
            :placeholder="`-- ${$lang.app.select} --`"
            @input="save"
        />
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "../../partials/Modal.vue";
import VSelect from "vue3-select"
export default {
  name: "SizeSelect",
  components: {Modal, VSelect},
  props: {
    modelValue: [Number, String],
    storeCategoryId: Number
  },

  data() {
    return {
      hasSize: !!this.modelValue,
      modal: false,
      fields: [],
      fieldId: this.modelValue
    }
  },

  created() {
    this.fetchFields()
  },

  watch: {
    hasSize(val) {
      if (!val) {
        this.$emit('update:modelValue', null)
        this.fieldId = null
      }

        setTimeout(() => {
          if (!this.modelValue)
            this.hasSize = false
        }, 100)

    }
  },

  methods: {
    fetchFields() {
      return this.axios.get(this.$urls.fields, { params: { code: 'size' } })
          .then(res => {
            this.fields = res.data
          })
      .catch(() => {
        this.hasSize = false
      })
    },

    save() {
      this.$emit('update:modelValue', this.fieldId)
      this.modal = false
      this.hasSize = true
    },

    showModal() {
      setTimeout(() => {
        if (this.hasSize)
          this.modal = true;
      }, 100)
    }
  }
}
</script>

<style scoped>
.form-check-input {
  position: relative;
  top: 1px;
  margin-right: 3px;
}
</style>