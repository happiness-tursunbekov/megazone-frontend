<template>
<div class="container">
  <h2>Authorizing by Google account</h2>
  <modal
      v-model="modal"
      :modal-title="$lang.app.userNotFound"
      :cancel-button-label="$lang.app.no"
      :ok-button-label="$lang.app.yes"
      @close="$router.push({ name: 'home' })"
      @okButtonClick="signIn(info.access_token, true);modal=false"
  >
    <div class="p-3" v-html="$lang.app.userNotFoundMsg.replace(':email', info.email)"></div>
  </modal>
</div>
</template>

<script>
import Modal from "../../components/partials/Modal.vue";

export default {
  name: "Google",
  components: {Modal},

  data() {
    return {
      info: null,
      modal: false
    }
  },

  mounted() {
    this.info = this.parseQuery(this.$route.fullPath.split('#')[1]);

    if (this.info.access_token)
      this.signIn(this.info.access_token)
  },

  methods: {
    parseQuery(queryString) {
      let query = {};
      let pairs = queryString.split('&');
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    },

    signIn(token, up) {
      return this.axios.post(this.$urls.authGoogle, {
        token,
        action: up ? 'signup' : undefined
      }).then(res => {
        if (res.data.code === 'user_not_found') {
          this.info.email = res.data.email
          this.modal = true
        } else {
          this.$cookie.setItem('token', res.data.token, Infinity)
          this.$store.dispatch('setUser', res.data)
          this.$router.push({ name: 'home' })
        }
      })
    }

  }
}
</script>

<style scoped>

</style>