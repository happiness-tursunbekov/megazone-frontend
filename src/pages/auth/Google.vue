<template>
Google auth
</template>

<script>
export default {
  name: "Google",

  data() {
    return {
      info: null
    }
  },

  created() {
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

    signIn(token) {
      return this.axios.post(this.$urls.authGoogle, {
        token
      }).then(res => {
        console.log(res)
      })
    }

  }
}
</script>

<style scoped>

</style>