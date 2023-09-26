<template>
  <modal
    v-model="modals.action"
    :modal-title="category.name + ': ' + $lang.app.fieldsSettings"
  >
    <div class="p-3">
      <button @click="modals.group = true" type="button" class="btn btn-primary"><i class="la la-plus"></i> {{ $lang.app.addGroup }}</button>
      <button @click="fieldForm.groupIndex = null; modals.field = true" type="button" class="btn btn-success"><i class="la la-plus"></i> {{ $lang.app.addField }}</button>
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
        <label class="form-label">{{ $lang.app.type }} <span class="required">*</span></label>
        <select v-model="fieldForm.type" class="form-control" required>
          <option value="" disabled>{{ $lang.app.select }}</option>
          <option value="number">NUMBER</option>
          <option value="float">FLOAT/DOUBLE</option>
          <option value="text">TEXT</option>
          <option value="select">SELECTION/LIST</option>
          <option value="boolean">YES/NO</option>
        </select>
      </div>
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
      <div v-if="fieldForm.type === 'select'" class="form-group">
        <label class="form-label">{{ $lang.app.options }}</label>
        <button @click="addOption" type="button" class="btn btn-sm btn-outline-success ml-1"><i class="icon icon-plus"></i></button>
        <div v-for="(option, key) in fieldForm.options" :key="key">
          <div class="row">
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text">[RU]</label>
                </div>
                <input required v-model="fieldForm.options[key].title" type="text" class="form-control"/>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text">[EN]</label>
                </div>
                <input required v-model="fieldForm.options[key].titleEn" type="text" class="form-control"/>
              </div>
            </div>
            <div class="col-1">
              <button @click="removeOption(key)" type="button" class="btn btn-round btn-danger">
                <i class="icon icon-close"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">{{ $lang.app.settings }}</label>
        <div class="custom-control custom-checkbox">
          <input v-model="fieldForm.filter" type="checkbox" class="custom-control-input" id="checkout-create-acc">
          <label class="custom-control-label" for="checkout-create-acc">{{ $lang.app.appearanceOnFiltering }}</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input v-model="fieldForm.required" type="checkbox" class="custom-control-input" id="checkout-create-acc-req">
          <label class="custom-control-label" for="checkout-create-acc-req">{{ $lang.app.isRequiredField }}</label>
        </div>
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
        groupIndex: null,
        storeCategoryFieldGroupId: '',
        type: '',
        filter: false,
        fieldId: '',
        addon: '',
        required: ''
      }
    }
  },

  computed: {
    storeItem() {
      return this.$store.getters.store
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
    this.fetchGroups()
    this.fetchFields()
  },

  methods: {
    fetchGroups() {
      return this.axios.get(
          this.$urls.storeSettingsCategoriesGroups
              .replace(':storeId', this.storeItem.id)
              .replace(':categoryId', this.category.id)
      ).then(res => {
        this.groups = res.data
      })
    },

    fetchFields() {
      return this.axios.get(
          this.$urls.storeSettingsCategoriesFields
              .replace(':storeId', this.storeItem.id)
              .replace(':categoryId', this.category.id)
      ).then(res => {
        this.fields = res.data
      })
    },

    saveGroup() {
      this.axios.post(
          this.$urls.storeSettingsCategoriesGroups
              .replace(':storeId', this.storeItem.id)
              .replace(':categoryId', this.category.id),
          this.groupForm
      )
          .then(res => {
            this.groups.push(res.data)
            this.modals.group = false
            this.resetGroupForm()
          })
    },

    saveField() {
      if (this.fieldForm.groupIndex !== null) {
        this.fieldForm.storeCategoryFieldGroupId = this.groups[this.fieldForm.groupIndex].id
      }
      this.axios.post(
          this.$urls.storeSettingsCategoriesFields
              .replace(':storeId', this.storeItem.id)
              .replace(':categoryId', this.category.id),
          this.fieldForm
      )
          .then(res => {
            if (this.fieldForm.storeCategoryFieldGroupId) {
              this.groups[this.fieldForm.groupIndex].fields.push({...res.data})
            } else {
              this.fields.push({...res.data})
            }
            this.modals.field = false
            this.resetFieldForm()
          })
    },

    resetGroupForm() {
      this.groupForm.name = ''
      this.groupForm.nameEn = ''
    },

    resetFieldForm() {
      this.groupForm.name = ''
      this.groupForm.nameEn = ''
      this.groupForm.options = []
      this.groupForm.groupIndex = null
      this.groupForm.storeCategoryFieldGroupId = ''
      this.groupForm.type = ''
      this.groupForm.filter = false
    },

    addOption() {
      this.fieldForm.options.push({
        id: '',
        title: '',
        titleEn: ''
      })
    },

    removeOption(key) {
      this.fieldForm.options.splice(key, 1)
    }
  }
}
</script>

<style scoped>

</style>