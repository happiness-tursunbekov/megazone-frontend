<template>
  <div v-if="link" class="social-icons social-icons-sm">
    <span class="social-label">{{ $lang.app.share }}:</span>
    <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + link" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
    <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
    <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
  </div>
</template>

<script>
export default {
  name: "Share",

  data() {
    return {
      link: ''
    }
  },

  mounted() {
    this.link = location.href
  }
}
</script>

<style scoped>

</style>