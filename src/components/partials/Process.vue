<template>
  <div class="position-relative border text-center bg-light">
    <div class="small-process" :style="'width: ' + percent + '%'"></div>
    <div class="process-txt"><slot/></div>
    <div v-if="percent !== 100" class="small-process-bottom process-animation"></div>
  </div>
</template>

<script>
export default {
  name: "Process",

  props: {
    percent: Number,
    hideProcessAnimation: Boolean
  }
}
</script>

<style scoped>z
.border {
  border-color: rgb(193, 214, 246) !important;
}

.small-process {
  height:100%;
  left:0; top:0;
  bottom:0;
  background-color: rgb(193, 214, 246);
  position: absolute;
}

.process-txt {
  color: #2E71E5;
  font-weight: bold;
  text-decoration: none;
  position: relative;
}
.small-process-bottom {
  position: absolute;
  height:15%;
  left:0;
  bottom:0;
  right:0;
  z-index: 10;
}
</style>