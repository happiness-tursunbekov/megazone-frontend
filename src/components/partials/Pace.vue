<template>
  <div v-if="active" :class="{ 'active': progress }" class="vue-progress">
    <div class="item loading-6">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "pace",
  data() {
    return  {
      progress: false,
      timer: null,
      timerActive: null,
      active: false
    }
  },

  computed: {
    count() {
      return this.$pace.count
    }
  },

  watch: {
    '$pace.progress' (status) {
      if(!status) {
        this.timer = setTimeout(() => {
          this.progress = status;
          this.timerActive = setTimeout(() => {
            this.active = false;
          }, 200);
        }, 400);
      } else {
        this.active = true;
        this.progress = status;
        if (this.timerActive) {
          clearTimeout(this.timerActive);
          this.timerActive = null;
        }
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      }
    }
  }
}
</script>

<style scoped>
.vue-progress {
  position: fixed;
  top:10px;
  left: 50%;
  z-index: 1051;
  margin-left:-20px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  width: 40px;
  height: 40px;
  padding: 4px;
  transition: visibility .5s, margin-top .2s ease-in;
  visibility: hidden;
  margin-top:-55px
}
.vue-progress.active {
  visibility: visible;
  margin-top:0
}
.vue-progress .item {
  display: inline-block;
  vertical-align: middle;
  transform-origin: center;
  animation: rotate 1s linear infinite;
}
.vue-progress .loading-6 svg {
  width: 32px;
}
.vue-progress .loading-6 circle {
  fill: none;
  stroke: #0C64E9;
  stroke-width: 6;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1s ease-in-out infinite;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>