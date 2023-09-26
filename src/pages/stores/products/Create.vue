<template>
  <headings
      :breadcrumbs="breadcrumbs"
      :title="lang.app.addProduct"
  />
  <div class="container-fluid">
    <ul class="nav nav-pills" id="tabs-5" role="tablist">
      <li class="nav-item">
        <a @click.prevent="formHelper.tab = 0" href="#" :class="{ 'active': formHelper.tab === 0 }" class="nav-link">Images</a>
      </li>
      <li class="nav-item">
        <a @click.prevent="formHelper.tab >= 1 ? formHelper.tab = 1 : null" href="#" :class="{ 'disabled': formHelper.tab < 1, 'active': formHelper.tab === 1 }" class="nav-link">Details</a>
      </li>
    </ul>
    <div class="tab-content" id="tab-content-5">
      <div :class="{ 'active show': formHelper.tab === 0 }" class="tab-pane fade">
        <form @submit.prevent="toDetails">
          <button @click="$refs.choose.click()" type="button" class="btn btn-secondary">Choose</button>
          <button type="submit" class="btn btn-success">Next</button>
          <div class="row">
            <div v-for="(img, key) in form.files" :key="key" class="col-md-2 up-image">
              <a class="up-img-content" href="#" @click.prevent="editImage(key)">
                Edit
              </a>
              <a class="up-img-hover" href="#">
                <img :src="img" alt="image"/>
              </a>
            </div>
          </div>
          <input ref="choose" multiple class="d-none" type="file" alt="alt" @change="uploadFile"/>
          <image-editor-modal v-model="modals.imageEditorModal" @save="saveImage" :src="form.files[formHelper.currentImageIndex]"/>
        </form>
      </div><!-- .End .tab-pane -->
      <div :class="{ 'active show': formHelper.tab === 1 }" class="tab-pane fade">
        <form @submit.prevent="save">
          <button @click="formHelper.tab = 0" type="button" class="btn btn-primary">Back</button>
          <button type="submit" class="btn btn-success">Save</button>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">{{ lang.app.category }}<span class="text-danger">*</span></label>
                <store-category-select  v-model="form.storeCategoryId" @change="fetchFields" required/>
              </div>
            </div>
            <template v-if="form.storeCategoryId">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ lang.app.brandAndModel }}<span class="text-danger">*</span></label>
                  <brand-select
                      :brands="formHelper.brands"
                      :category-id="form.storeCategoryId"
                      :store-id="storeItem.id"
                      v-model:brand-id="form.brandId"
                      v-model:model-id="form.modelId"
                      required
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ lang.app.title }}<span class="text-danger">*</span></label>
                  <input v-model="form.title" type="text" required class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ lang.app.description }}<span class="text-danger">*</span></label>
                  <editor v-model="form.description" required/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ lang.app.price }}<span class="text-danger">*</span></label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <select v-model="form.currencyTypeId" required class="form-control">
                        <option value="" disabled>{{ lang.app.selectCurrency }}</option>
                        <option v-for="(cType, key) in formHelper.currencyTypes" :key="key" :value="cType.id">{{ cType.title }}</option>
                      </select>
                    </div>
                    <input type="number" min="0" step="0.01" v-model="form.price" required class="form-control">
                  </div>
                </div>
              </div>
              <template v-if="formHelper.fields.length > 0">
                <div v-for="(field, key) in formHelper.fields" :key="key" class="col-md-6">
                  <div class="form-group">
                    <field v-model="form.fields[field.id]" :properties="field"/>
                  </div>
                </div>
              </template>
            </template>
          </div>
          <template v-if="formHelper.groups.length > 0">
            <div class="row" v-for="(group, key) in formHelper.groups" :key="key">
              <div class="col-md-12">
                <h2 class="title">{{ group.name }}</h2>
              </div>
              <div v-for="(field, key) in group.fields" :key="key" class="col-md-6">
                <div class="form-group">
                  <field v-model="form.groups[group.id].fields[field.id]" :properties="field"/>
                </div>
              </div>
            </div>
          </template>
          <button type="submit" class="btn btn-success">Save</button>
        </form>
      </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->

  </div>
</template>

<script setup>
import Headings from "../../../components/header/Headings.vue";
import {useLang, useSnotify, useUrls} from "../../../plugins/globals";
import {useStore} from "vuex";
import ImageEditorModal from "../../../components/partials/ImageEditorModal.vue";
import {reactive} from "vue";
import StoreCategorySelect from "../../../components/partials/store-category-select/StoreCategorySelect.vue";
import axios from "axios";
import Field from "../../../components/partials/Field.vue";
import BrandSelect from "../../../components/partials/BrandSelect.vue";
import Editor from "../../../components/partials/Editor.vue";
import {useRouter} from "vue-router";

const lang = useLang()

const urls = useUrls()

const storeItem = useStore().getters.store

const snotify = useSnotify()

const router = useRouter()

const breadcrumbs = [
  {
    label: lang.app.stores,
    route: {
      name: 'stores.index'
    }
  },
  {
    label: storeItem.name,
    route: {
      name: 'stores.show',
      params: {
        store: storeItem.slug
      }
    }
  },
  {
    label: lang.app.addProduct
  }
]

const modals = reactive({
  imageEditorModal: false
})

const form = reactive({
  files: [],
  fields: {},
  groups: {},
  brandId: '',
  modelId: '',
  price: '',
  currencyTypeId: storeItem.defaultCurrencyType ? storeItem.defaultCurrencyType.id : '',
  title: '',
  description: ''
})

const formHelper = reactive({
  currentImageIndex: null,
  tab: 0,
  categoryId: null,
  fields: [],
  groups: [],
  brands: [],
  currencyTypes: []
})
const uploadFile = e => {
  const len = form.files.length

  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function () {
      form.files.push(reader.result)
    };
    reader.readAsDataURL(file);
  });
  formHelper.currentImageIndex = len
  modals.imageEditorModal = true
}

const editImage = key => {
  formHelper.currentImageIndex = key;
  modals.imageEditorModal = true
}

const saveImage = file => {
  form.files[formHelper.currentImageIndex] = file
}

const fetchFields = storeCategoryId => {
  axios.get(urls.storeProductCreate.replace(':storeId', storeItem.id), {
    params: {storeCategoryId}
  }).then(res => {
    formHelper.currencyTypes = res.data.currencyTypes
    formHelper.brands = res.data.brands
    formHelper.fields = res.data.fields.map(field => {
      form.fields[field.id] = ''
      return field
    })
    formHelper.groups = res.data.groups.map(group => {
      form.groups[group.id] = { fields: {} }
      group.fields.map(field => {
        form.groups[group.id].fields[field.id] = ''
      })
      return group
    })
  })
}

const save = () => {
  return axios.post(urls.storeProducts.replace(':storeId', storeItem.id), form)
      .then(res => {
        snotify.success(lang.app.createSuccessMsg)
        router.push({
          name: 'stores.products.show',
          params: {
            store: storeItem.slug,
            id: res.data.id
          }
        })
      })
}

const toDetails = () => {
  if (form.files.length === 0) {
    snotify.error(lang.app.chooseAtLeastOneFileMsg)
    return false
  }
  formHelper.tab = 1
}
</script>

<style scoped>
.up-image>a>img {
  max-width: 100%;
}
.up-image>a.up-img-hover:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: #444444;
  visibility: hidden;
  opacity: 0;
  transition: all 0.45s ease;
  max-width: 100%;
}

.up-image:hover>a.up-img-hover:after {
  visibility: visible;
  opacity: 0.7;
}

.up-image>a.up-img-content {
  display: none;
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  color:white;
  z-index: 2;
  text-align: center;
  vertical-align: middle;
  height: 100%;
  padding-top: 20%;
}

.up-image:hover>a.up-img-content {
  display: inline;
}
</style>