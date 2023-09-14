<template>
  <modal v-model="modal">
    <div style="height: 400px">
      <PinturaEditor
          v-bind="props"
          :src="src"
          @pintura:load="handleLoad($event)"
          @pintura:process="handleProcess($event)"
      />
    </div>
  </modal>
</template>
<script>
import { PinturaEditor } from "@pqina/vue-pintura";
import { getEditorDefaults } from "@pqina/pintura";

// Import Pintura styles
import "@pqina/pintura/pintura.css";
import Modal from "./Modal.vue";

export default {
  name: "ImageEditorModal",
  components: {
    Modal,
    PinturaEditor,
  },
  props: {
    src: [String, Object],
    modelValue: Boolean
  },
  methods: {
    handleLoad: function () {

    },
    handleProcess: function (event) {
      const reader = new FileReader();
      reader.onload = () => {
        this.$emit('save', reader.result);
        this.modal = false
      };
      reader.readAsDataURL(event.detail.dest);
    },
  },
  data() {
    return {
      props: getEditorDefaults(),
      modal: false
    };
  },

  watch: {
    modal(val) {
      this.$emit('update:modelValue', val)
    },
    modelValue(val) {
      this.modal = val
    }
  }
};
</script>

<style>
/* bright / dark mode */
.pintura-editor {
  --color-background: 255, 255, 255;
  --color-foreground: 10, 10, 10;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  html {
    color: #fff;
    background: #111;
  }

  .pintura-editor {
    --color-background: 10, 10, 10;
    --color-foreground: 255, 255, 255;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
}
</style>
