<template>
  <div class="social-icons social-icons-colored justify-content-end" style="height:100%; vertical-align: middle">
    <modal v-model="modal" :modal-title="$lang.app.editSocialMediaLinks">
      <form class="p-3" @submit.prevent="save">
        <div class="form-group">
          <label class="form-label">{{ $lang.app.linkToYourWebsite }}</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                🌐
              </div>
            </div>
            <input v-model="form.website" type="text" class="form-control" placeholder="ex: https://www.example.com">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">{{ $lang.app.yourInstagramAccountUsername }}</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="icon icon-instagram"></i>
              </div>
            </div>
            <input v-model="form.instagram" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">{{ $lang.app.linkToYourFacebookPage }}</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="icon icon-facebook-f"></i>
              </div>
            </div>
            <input v-model="form.facebook" type="text" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">{{ $lang.app.linkToYourTwitterPage }}</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="icon icon-twitter"></i>
              </div>
            </div>
            <input v-model="form.twitter" type="text" class="form-control">
          </div>
        </div>
        <div class="text-right w-100">
          <button type="submit" class="btn btn-success">{{ $lang.app.save }}</button>
          <button type="button" @click="modal = false" class="btn btn-light">{{ $lang.app.cancel }}</button>
        </div>
      </form>
    </modal>
    <a v-if="$store.getters.isStoreAdmin" href="#" @click.prevent="modal=true" class="social-icon" :title="$lang.app.edit"><i class="icon-edit"></i></a>
    <a v-if="storeItem.website" :href="storeItem.website" class="social-icon" title="Website" target="_blank">🌐</a>
    <a v-if="storeItem.instagram" :href="'https://www.instagram.com/' + storeItem.instagram" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
    <a v-if="storeItem.facebook" :href="storeItem.facebook" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
    <a v-if="storeItem.twitter" :href="storeItem.twitter" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
  </div>
</template>

<script>
import Modal from "../partials/Modal.vue";

export default {
  name: "SocialMedia",
  components: {Modal},

  computed: {
    storeItem() {
      return this.$store.getters.store
    }
  },

  data() {
    return {
      modal: false,
      form: {
        instagram: '',
        facebook: '',
        website: '',
        twitter: ''
      }
    }
  },

  watch: {
    modal(status) {
      if (status) {
        this.form.website = this.storeItem.website
        this.form.facebook = this.storeItem.facebook
        this.form.instagram = this.storeItem.instagram
        this.form.twitter = this.storeItem.twitter
      }
    }
  },

  methods: {
    save() {
      return this.axios.post(this.$urls.storeSocialMedia.replace(':storeId', this.storeItem.id), this.form)
          .then(() => {
            this.storeItem.website = this.form.website
            this.storeItem.facebook = this.form.facebook
            this.storeItem.instagram = this.form.instagram
            this.storeItem.twitter = this.form.twitter
            this.modal = false
            this.$snotify.success(this.$lang.app.saveSuccessMsg)
          })
    }
  }
}
</script>

<style scoped>

</style>