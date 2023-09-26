<template>
  <div class="input-group">
    <input
        :value="value"
        @click="modal = true"
        type="text"
        class="form-control"
        @focusin="$refs.input.setAttribute('readonly', 'readonly')"
        @focusout="$refs.input.removeAttribute('readonly')"
        :required="required"
    >
    <div class="input-group-append">
      <button @click="modal= true" type="button" class="btn btn-secondary">{{ $lang.app.select }}</button>
    </div>
  </div>
  <modal v-model="modal" disable-backdrop-close>
    <form class="p-4" @submit.prevent="save">
      <div class="form-group">
        <label class="form-label">{{ $lang.app.brand }}<span class="text-danger">*</span></label>
        <v-select
            :options="brandsList"
            label="name"
            required
            v-model="brand"
        />
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.seriesOrModel }}<span class="text-danger">*</span></label>
        <v-select
            :options="modelsList"
            label="title"
            required
            v-model="model"
        />
      </div>
      <div v-if="model && model.children.length > 0" class="form-group">
        <label class="form-label">{{ $lang.app.model }}<span class="text-danger">*</span></label>
        <v-select
            :options="model.children"
            label="title"
            v-model="subModel"
            required
        />
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-success">Ready</button>
        <button @click="modal = false" type="button" class="btn btn-outline-gray">Cancel</button>
      </div>
    </form>
  </modal>
</template>

<script>
import VSelect from "./VSelect.vue";
import Modal from "./Modal.vue";
export default {
  name: "BrandSelect",
  components: {Modal, VSelect},
  props: {
    brands: Object,
    brandId: [Number, String],
    modelId: [Number, String],
    categoryId: Number,
    storeId: Number,
    required: Boolean
  },

  emits: ['update:brandId', 'update:modelId'],
  data() {
    return {
      brandsList: [],
      modal: false,
      value: '',
      brand: '',
      model: '',
      subModel: '',
      modelsList: []
    }
  },

  watch: {
    brands(val) {
      this.brandsList = val
    },
    brand(val) {
      if (val) {
        this.$emit('update:brandId', val.id)
        this.fetchModels(val.id)
      } else {
        this.modelsList = []
        this.$emit('update:brandId', '')
      }
    },
    model(val) {
      if (val && val.children.length === 0) {
        this.$emit('update:modelId', val.id)
      } else {
        this.$emit('update:modelId', '')
      }
      this.subModel = ''
    },
    subModel(val) {
      if (!val && this.model && this.model.children.length > 0)
        this.$emit('update:modelId', '')
      else if (val)
        this.$emit('update:modelId', val.id)
    }
  },

  created() {
    this.brandsList = this.brands;
  },

  methods: {
    fetchModels(brandId) {
      return this.axios.get(
          this.$urls.storeCategoryBrandModels
              .replace(':storeId', this.storeId)
              .replace(':categoryId', this.categoryId),
          {
            params: {brandId}
          }
      ).then(res => {
        this.modelsList = res.data
      })
    },
    save() {
      this.value = this.brand.name + ', ' + this.model.title + (this.subModel ? ', ' + this.subModel.title : '')
      this.modal = false
    }
  }
}
</script>

<style scoped>

</style>