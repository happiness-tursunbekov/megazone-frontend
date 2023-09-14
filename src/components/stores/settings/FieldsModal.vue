<template>
  <modal
    v-model="modals.action"
    :modal-title="category.name + ': ' + $lang.app.fieldsSettings"
  >
    <div class="p-3">
      <button @click="modals.group = true" type="button" class="btn btn-primary"><i class="la la-plus"></i> {{ $lang.app.addGroup }}</button>
      <button @click="fieldForm.groupIndex = null; modals.field = true" type="button" class="btn btn-success"><i class="la la-plus"></i> {{ $lang.app.addField }}</button>
      <div class="d-block">
        <span class="badge badge-warning">{{ $lang.app.fieldWarning }}</span>
      </div>
      <div class="font-weight-bold" v-if="groups.length > 0">Groups</div>
      <div class="list-group mt-1">
        <div v-for="(group, key) in groups" :key="key" class="list-group-item">
          <div class="d-flex justify-content-between">
            <span>{{ group.name }}</span>
            <div class="d-inline-block">
              <button @click="fieldForm.groupIndex = key; modals.field = true" type="button" class="btn btn-sm btn-success"><i class="la la-plus"></i> {{ $lang.app.addField }}</button>
            </div>
          </div>
          <div class="ml-2">
            <div class="font-weight-bold" v-if="group.fields.length > 0">Fields</div>
            <div class="list-group mt-1">
              <div v-for="(field, key) in group.fields" :key="key" class="list-group-item">
                <span>{{ field.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="font-weight-bold" v-if="fields.length > 0">Fields</div>
      <div class="list-group mt-1">
        <div v-for="(field, key) in fields" :key="key" class="list-group-item">
          <span>{{ field.name }}</span>
        </div>
      </div>
    </div>
  </modal>
  <modal
    v-model="modals.field"
    :modal-title="$lang.app.addingField"
  >
    <form class="p-3" @submit.prevent="saveField">
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }}[RU] <span class="required">*</span></label>
        <input v-model="fieldForm.name" type="text" class="form-control" required/>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }}[EN] <span class="required">*</span></label>
        <input v-model="fieldForm.nameEn" type="text" class="form-control" required/>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.addon }}</label>
        <input v-model="fieldForm.addon" type="text" class="form-control"/>
      </div>
      <button type="submit" class="btn btn-primary">{{ $lang.app.save }}</button>
      <button @click="modals.field = false" type="button" class="btn btn-light">{{ $lang.app.cancel }}</button>
    </form>
  </modal>
  <modal
    v-model="modals.group"
    :modal-title="$lang.app.addingGroup"
  >
    <form class="p-3" @submit.prevent="saveGroup">
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }}[RU] <span class="required">*</span></label>
        <input v-model="groupForm.name" type="text" class="form-control" required/>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.name }}[EN] <span class="required">*</span></label>
        <input v-model="groupForm.nameEn" type="text" class="form-control" required/>
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
        name: '',
        nameEn: '',
        fields: []
      },

      fieldForm: {
        name: '',
        nameEn: '',
        options: [],
        groupIndex: null
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

    saveField() {
      if (this.fieldForm.groupIndex !== null) {
        this.groups[this.fieldForm.groupIndex].fields.push({...this.fieldForm})
      } else {
        this.fields.push({...this.fieldForm})
      }
      this.modals.field = false
      this.resetFieldForm()
    },

    resetGroupForm() {
      this.groupForm.name = ''
      this.groupForm.nameEn = ''
    },

    resetFieldForm() {
      this.groupForm.name = ''
    }
  }
}
</script>

<style scoped>

</style>