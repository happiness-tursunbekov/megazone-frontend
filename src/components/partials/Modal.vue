<template>
  <div v-if="modelValue">
    <div class="back-drop"></div>
    <div @click="modalBackDrop" class="modal fade show" style="display: inline-block" ref="modalBackDrop">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <button @click="close" type="button" class="modal-close">
            <span aria-hidden="true"><i class="icon-close"></i></span>
          </button>
          <div v-if="modalTitle" class="modal-header">
            <h4 class="modal-title">{{ modalTitle }}<small class="title-desc" v-if="modalDescription"><br/>{{ modalDescription }}</small></h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div v-if="cancelButtonLabel || okButtonLabel" class="modal-footer">
            <button v-if="okButtonLabel" @click="$emit('ok-button-click');$emit('okButtonClick')" type="button" class="btn  btn-primary">{{ okButtonLabel }}</button>
            <button v-if="cancelButtonLabel" @click="close" type="button" class="btn  btn-outline-primary">{{ cancelButtonLabel }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modelValue: Boolean,
    modalTitle: String,
    modalDescription: String,
    cancelButtonLabel: String,
    okButtonLabel: String,
    disableBackdropClose: Boolean
  },

  created() {
    if (this.modelValue)
      this.$modal.show()
    else
      this.$modal.hide()
  },

  watch: {
    modelValue (status) {
      if (status)
        this.$modal.show()
      else
        this.$modal.hide()
    }
  },
  methods: {
    modalBackDrop(e) {
      if(!this.disableBackdropClose && e.target.classList.contains('modal')) {
        this.$emit('update:modelValue', false);
      }
    },

    close() {
      this.$emit('update:modelValue', false);
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.modal {
  max-height: 100%;
  overflow: auto;
}
.back-drop {
  background-color: #333333;
  opacity: .6;
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: 1050;
}
.modal-close {
  position: absolute;
  right: -50px;
  top: -5px;
  text-decoration: none;
  text-align: center;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  line-height: 0;
  font-weight: 100;
  z-index: 1;
}
.modal-close .icon-close {
  color: #333333;
  text-shadow: 0 0 1px #fff;
  font-size: 25pt;
}

@media screen and (max-width: 576px) {
  .modal-close {
    right: 0;
    top: 10px;
  }
}
</style>