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
        <a @click.prevent="formHelper.tab >= 1 ? formHelper.tab = 1 : null" href="#" :class="{ 'disabled': formHelper.tab < 1, 'active': formHelper.tab === 1 }" class="nav-link">About</a>
      </li>
    </ul>
    <div class="tab-content" id="tab-content-5">
      <div :class="{ 'active show': formHelper.tab === 0 }" class="tab-pane fade">
        <form>
          <button @click="$refs.choose.click()" type="button" class="btn btn-secondary">Choose</button>
          <button @click="formHelper.tab = 1" type="button" class="btn btn-success">Next</button>
          <div class="row">
            <div v-for="(img, key) in form.images" :key="key" class="col-md-2 up-image">
              <a class="up-img-content" href="#" @click.prevent="editImage(key)">
                Edit
              </a>
              <a class="up-img-hover" href="#">
                <img :src="img" alt="image"/>
              </a>
            </div>
          </div>
          <input ref="choose" multiple class="d-none" type="file" alt="alt" @change="uploadFile"/>
          <image-editor-modal v-model="modals.imageEditorModal" @save="saveImage" :src="form.images[formHelper.currentImageIndex]"/>
        </form>
      </div><!-- .End .tab-pane -->
      <div :class="{ 'active show': formHelper.tab === 1 }" class="tab-pane fade">
        <form>
          <button @click="formHelper.tab = 0" type="button" class="btn btn-primary">Back</button>
          <button type="button" class="btn btn-success">Save</button>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">{{ $lang.app.category }}<span class="text-danger">*</span></label>
                <store-category-select  v-model="form.categoryId"/>
              </div>
            </div>
          </div>
        </form>
      </div><!-- .End .tab-pane -->
    </div><!-- End .tab-content -->

  </div>
</template>

<script setup>
import Headings from "../../../components/header/Headings.vue";
import {useLang} from "../../../plugins/globals";
import {useStore} from "vuex";
import ImageEditor from "../../../components/partials/ImageEditor.vue";
import ImageEditorModal from "../../../components/partials/ImageEditorModal.vue";
import {reactive} from "vue";
import StoreCategorySelect from "../../../components/partials/store-category-select/StoreCategorySelect.vue";
import CategorySelect from "../../../components/partials/category-select/CategorySelect.vue";

const lang = useLang()

const item = useStore().getters.store

const breadcrumbs = [
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
        store: item.slug
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
  images: []
})

const formHelper = reactive({
  currentImageIndex: null,
  tab: 0,
  categoryId: null
})
const uploadFile = e => {
  const len = form.images.length

  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function () {
      form.images.push(reader.result)
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
  form.images[formHelper.currentImageIndex] = file
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