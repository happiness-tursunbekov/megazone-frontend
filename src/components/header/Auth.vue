<template>
  <li class="login">
    <div v-if="!user.id">
      <a href="#" @click.prevent="modal = true">Sign in / Sign up</a>
      <modal
          v-model="modal"
      >
        <div class="form-box">
          <div class="form-tab">
            <ul class="nav nav-pills nav-fill nav-border-anim" role="tablist">
              <li class="nav-item">
                <a @click.prevent="selectTab('signIn')" :class="{ active: tabs.signIn.active }" class="nav-link" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
              </li>
              <li class="nav-item">
                <a @click.prevent="selectTab('signUp')" :class="{ active: tabs.signUp.active }" class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
              </li>
            </ul>
            <div class="tab-content" id="tab-content-5">
              <div :class="{ 'active show': tabs.signIn.active }" class="tab-pane fade" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                <form @submit.prevent="signIn">
                  <div class="form-group">
                    <label for="singin-email">Email *</label>
                    <input v-model="tabs.signIn.form.username" type="text" class="form-control" id="singin-email" name="singin-email" required="">
                  </div><!-- End .form-group -->

                  <div class="form-group">
                    <label for="singin-password">Password *</label>
                    <input v-model="tabs.signIn.form.password" type="password" class="form-control" id="singin-password" name="singin-password" required="">
                  </div><!-- End .form-group -->

                  <div class="form-footer">
                    <button type="submit" class="btn btn-outline-primary-2">
                      <span>LOG IN</span>
                      <i class="icon-long-arrow-right"></i>
                    </button>

                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="signin-remember">
                      <label class="custom-control-label" for="signin-remember">Remember Me</label>
                    </div><!-- End .custom-checkbox -->

                    <a href="#" class="forgot-link">Forgot Your Password?</a>
                  </div><!-- End .form-footer -->
                </form>
                <div class="form-choice">
                  <p class="text-center">or sign in with</p>
                  <div class="row">
                    <div class="col-sm-12">
                      <a @click.prevent="signInWithGoogle()" href="#" class="btn btn-login btn-g">
                        <i class="icon-google"></i>
                        Google account
                      </a>
                    </div><!-- End .col-6 -->
                  </div><!-- End .row -->
                </div><!-- End .form-choice -->
              </div><!-- .End .tab-pane -->
              <div :class="{ 'active show': tabs.signUp.active }" class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                <form @submit.prevent="signUp" action="#">
                  <div class="form-group">
                    <label for="register-name">First name *</label>
                    <input v-model="tabs.signUp.form.name" type="text" class="form-control" id="register-name" name="register-name" required="">
                  </div><!-- End .form-group -->

                  <div class="form-group">
                    <label for="register-surname">Last name *</label>
                    <input v-model="tabs.signUp.form.lastName" type="text" class="form-control" id="register-surname" name="register-surname" required="">
                  </div><!-- End .form-group -->

                  <div class="form-group">
                    <label for="register-email">Email *</label>
                    <input v-model="tabs.signUp.form.username" type="email" class="form-control" id="register-email" name="register-email" required="">
                  </div><!-- End .form-group -->

                  <div class="form-group">
                    <label for="register-password">Password *</label>
                    <input v-model="tabs.signUp.form.password" type="password" class="form-control" id="register-password" name="register-password" required="">
                  </div><!-- End .form-group -->

                  <div class="form-group">
                    <label for="register-confirm-password">Confirm password *</label>
                    <input v-model="tabs.signUp.form.confirmPassword" type="password" class="form-control" id="register-confirm-password" name="register-confirm-password" required="">
                  </div><!-- End .form-group -->

                  <div class="form-footer">
                    <button type="submit" class="btn btn-outline-primary-2">
                      <span>SIGN UP</span>
                      <i class="icon-long-arrow-right"></i>
                    </button>

                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="register-policy" required="">
                      <label class="custom-control-label" for="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                    </div><!-- End .custom-checkbox -->
                  </div><!-- End .form-footer -->
                </form>
                <div class="form-choice">
                  <p class="text-center">or sign up with</p>
                  <div class="row">
                    <div class="col-sm-12">
                      <a @click.prevent="signInWithGoogle(true)" href="#" class="btn btn-login btn-g">
                        <i class="icon-google"></i>
                        Google account
                      </a>
                    </div><!-- End .col-6 -->
                  </div><!-- End .row -->
                </div><!-- End .form-choice -->
              </div><!-- .End .tab-pane -->
            </div><!-- End .tab-content -->
          </div><!-- End .form-tab -->
        </div>
      </modal>
    </div>
    <div v-else>
      <i class="icon-user"></i>{{ user.name }} |
      <a href="#" @click.prevent="signOut">{{ $lang.app.signOut }}</a>
    </div>
  </li>
</template>

<script>
import Modal from "../partials/Modal.vue";
export default {
  name: "Auth",
  components: {Modal},
  data() {
    return {
      modal: this.authModal,
      tabs: {
        signIn: {
          active: true,
          form: {
            username: '',
            password: '',
            rememberMe: false
          }
        },
        signUp: {
          active: false,
          form: {
            username: '',
            password: '',
            name: '',
            lastName: '',
            confirmPassword: ''
          }
        }
      }
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
    authModal() {
      return this.$store.getters.authModal
    }
  },

  watch: {
    authModal(status) {
      this.modal = status
    },
    modal(status) {
      this.$store.dispatch(status ? 'showAuthModal' : 'hideAuthModal');
    }
  },

  methods: {
    selectTab(name) {
      this.tabs.signIn.active = name === 'signIn';
      this.tabs.signUp.active = name === 'signUp';
    },

    signIn() {
      this.axios.post(this.$urls.authLogin, this.tabs.signIn.form)
          .then(res => {
            this.$cookie.setItem('token', res.data.token, Infinity)
            this.$store.dispatch('setUser', res.data)
          });
    },

    signOut() {
      this.axios.get('api/auth/logout')
      this.$cookie.removeItem('token')
      this.$store.dispatch('resetUser')
    },

    signInWithGoogle(up) {
      return this.axios.get(this.$urls.authGoogle).then(res => {
        location.href = res.data + '&state=' + (up ? 'up' : 'in')
      })
    },

    signUp() {
      if (this.tabs.signUp.form.password !== this.tabs.signUp.form.confirmPassword) {
        this.$snotify.error(this.$lang.app.passwordsDidntMatchMsg)
        return false
      }

      return this.axios.post(this.$urls.authRegister, this.tabs.signUp.form).then(res => {
        this.$cookie.setItem('token', res.data.token, Infinity)
        this.$store.dispatch('setUser', res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>