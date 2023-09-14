<template>
  <headings :title="lang.app.editingStore" :breadcrumbs="breadcrumbs"/>
  <div class="container">
    <form @submit.prevent="save">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label class="form-label">{{ lang.app.name }} <span class="required">*</span></label>
            <input v-model="form.name" type="text" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.slug }} <span class="required">*</span></label>
            <div class="input-group">
              <div class="input-group-prepend">
                <button class="btn btn-light" disabled>www.megazone.store/</button>
              </div>
              <input v-model="form.slug" type="text" class="form-control" pattern="^[a-zA-Z0-9_\.\-]*$" required>
            </div>
            <span class="badge badge-warning">{{ lang.app.only }} {{ lang.app.latinLetters.toLowerCase() }}, {{ lang.app.digits.toLowerCase() }} {{ lang.app.and }} .-_ {{ lang.app.symbols.toLowerCase() }}</span>
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.slogan }}</label>
            <input v-model="form.slogan" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.storeTypeIds }} <span class="required">*</span></label>
            <select v-model="form.storeTypeIds" class="form-control" multiple required>
              <option disabled value="">-- {{ lang.app.select }} --</option>
              <option v-for="type in options.types" :key="type.id" :value="type.id">{{ type.title }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.icon }}</label>
            <file-select v-model="form.icon"/>
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.coverImage }}</label>
            <file-select v-model="form.cover"/>
          </div>
          <div class="form-group">
            <label class="form-label">{{ lang.app.address }} <span class="required">*</span></label>
            <address-select v-model:full-path="form.address.fullPath" v-model:lat="form.address.lat" v-model:lng="form.address.lng" required/>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">{{ lang.app.about }}</label>
            <editor v-model="form.about"/>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <button type="submit" class="btn btn-primary">{{ lang.app.save }}</button>
        <router-link :to="{ name: 'stores.show', params: { store: item.slug } }" class="btn btn-light">{{ lang.app.cancel }}</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import Headings from "../../components/header/Headings.vue";
import {useLang, useSnotify, useUrls} from "../../plugins/globals";
import Editor from "../../components/partials/Editor.vue";
import {useAxios} from "../../plugins/vue-axios";
import {reactive} from "vue";
import AddressSelect from "../../components/partials/AddressSelect.vue";
import FileSelect from "../../components/partials/FileSelect.vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";

const lang = useLang()

const axios = useAxios()

const urls = useUrls()

const router = useRouter()

const route = useRoute()

const snotify = useSnotify();

const options = reactive({
  types: [],
  item: {}
})

const store = useStore()

const item = store.getters.store

let breadcrumbs = [
  {
    label: lang.app.stores,
    route: {
      name: 'stores.index'
    }
  },
  {
    label: item.name,
    route: {
      name: 'stores.show',
      params: {
        storeId: item.id
      }
    }
  },
  {
    label: lang.app.editStore
  }
];

const form = reactive({
  name: item.name,
  slug: item.slug || '',
  slogan: item.slogan,
  storeTypeIds: item.storeTypes ? item.storeTypes.map(type => type.id) : [],
  icon: '',
  cover: '',
  address: {
    lat: item.address ? item.address.lat : null,
    lng: item.address ? item.address.lng : null,
    fullPath: item.address ? item.address.fullPath : ''
  },
  about: item.about
})

await axios.get(urls.storeCreate)
    .then(res => {
      options.types = res.data.types
    })

const save = () => {
  axios.put(urls.storeShow.replace(':slug', item.id), form)
      .then(res => {
        store.dispatch('setStore', res.data)
        snotify.success(lang.app.createSuccessMsg)
        return router.push({
          name: 'stores.show',
          params: {
            store: res.data.slug
          }
        })
      })
}

</script>