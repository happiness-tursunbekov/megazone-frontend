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
        <a @click.prevent="formHelper.tab >= 1 ? formHelper.tab = 1 : null" href="#" :class="{ 'disabled': formHelper.tab < 1, 'active': formHelper.tab === 1 }" class="nav-link">Category</a>
      </li>
      <li class="nav-item">
        <a @click.prevent="formHelper.tab >= 2 ? formHelper.tab = 2 : null" href="#" :class="{ 'disabled': formHelper.tab < 2, 'active': formHelper.tab === 2 }" class="nav-link">Properties</a>
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
        <button @click="formHelper.tab = 0" type="button" class="btn btn-primary">Back</button>
        <button @click="formHelper.tab = 2" type="button" class="btn btn-success">Next</button>
        <p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
      </div><!-- .End .tab-pane -->
      <div :class="{ 'active show': formHelper.tab === 2 }" class="tab-pane fade">
        <button @click="formHelper.tab = 1" type="button" class="btn btn-primary">Back</button>
        <button type="button" class="btn btn-success">Save</button>
        <p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
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
  tab: 0
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