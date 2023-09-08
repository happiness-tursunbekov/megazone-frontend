<template>
  <modal
    v-model="modals.action"
    :modal-title="category.name + ': ' + $lang.app.fieldsSettings"
  >
    <div class="p-3">
      <button @click="modals.group = true" type="button" class="btn btn-primary"><i class="la la-plus"></i> {{ $lang.app.addGroup }}</button>
      <button @click="modals.field = true" type="button" class="btn btn-success"><i class="la la-plus"></i> {{ $lang.app.addField }}</button>
      <div class="list-group mt-1">
        <div v-for="(group, key) in this.groups" :key="key" class="list-group-item">
          {{ group.name }}
        </div>
      </div>
    </div>
  </modal>
  <modal
    v-model="modals.field"
    :modal-title="$lang.app.addingField"
  ></modal>
  <modal
    v-model="modals.group"
    :modal-title="$lang.app.addingGroup"
  >
    <form class="p-3" @submit.prevent="saveGroup">
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }} <span class="required">*</span></label>
        <input v-model="groupForm.name" type="text" class="form-control" required/>
      </div>
      <button type="submit" class="btn btn-primary">{{ $lang.app.save }}</button>
      <button @click="modals.group = false" type="button" class="btn btn-light">{{ $lang.app.cancel }}</button>
    </form>
  </modal>
</template>

<script>
import Modal from "../../partials/Modal.vue";
export default {
  name: "FieldsModal",
  components: {Modal},
  props: {
    modelValue: Boolean,
    category: Object
  },

  data() {
    return {
      modals: {
        action: false,
        field: false,
        group: false
      },

      groups: [],
      fields: [],

      groupForm: {
        name: ''
      }
    }
  },

  watch: {
    'modals.action' (status) {
      this.$emit('update:modelValue', status)
    },
    modelValue(status) {
      this.modals.action = status
    }
  },

  created() {
    this.modals.action = this.modelValue
  },

  methods: {
    saveGroup() {
      this.groups.push({...this.groupForm})
      this.modals.group = false
      this.resetGroupForm()
    },

    resetGroupForm() {
      this.groupForm.name = ''
    }
  }
}
</script>

<style scoped>

</style>