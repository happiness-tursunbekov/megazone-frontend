<template>
  <input ref="image" @change="selectFile" type="file" class="form-control">
  <img ref="img" v-if="modelValue" :src="modelValue" alt="img" width="100" @click="viewImage">
</template>

<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css'
export default {
  name: "FileSelect",
  props: {
    modelValue: String
  },
  methods: {
    selectFile(e) {
      if (e.target.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          this.$emit('update:modelValue', reader.result);
        };
        reader.onerror = error => {
          console.log('Error: ', error);
        };
      }
    },
    viewImage() {
      const viewer = new Viewer(this.$refs.img, {
        inline: false,
        viewed() {
          viewer.zoomTo(1);
        },
      });
      viewer.show()
    }
  }
}
</script>

<style scoped>

</style>