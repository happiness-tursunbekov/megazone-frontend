<template>
  <footer class="footer footer-2">
    <div class="cta cta-horizontal cta-horizontal-box bg-primary">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <h3 class="cta-title text-white">Join Our Newsletter</h3><!-- End .cta-title -->
            <p class="cta-desc text-white">Subcribe to get information about products and coupons</p><!-- End .cta-desc -->
          </div><!-- End .col-lg-5 -->

          <div class="col-lg-7">
            <form action="#">
              <div class="input-group">
                <input type="email" class="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required="">
                <div class="input-group-append">
                  <button class="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i class="icon-long-arrow-right"></i></button>
                </div><!-- .End .input-group-append -->
              </div><!-- .End .input-group -->
            </form>
          </div><!-- End .col-lg-7 -->
        </div><!-- End .row -->
      </div><!-- End .container -->
    </div>
    <div class="icon-boxes-container-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rocket"></i>
                                </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Shipping</h3><!-- End .icon-box-title -->
                <p>Orders $50 or more</p>
              </div><!-- End .icon-box-content -->
            </div><!-- End .icon-box -->
          </div><!-- End .col-sm-6 col-lg-3 -->

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-rotate-left"></i>
                                </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">Free Returns</h3><!-- End .icon-box-title -->
                <p>Within 30 days</p>
              </div><!-- End .icon-box-content -->
            </div><!-- End .icon-box -->
          </div><!-- End .col-sm-6 col-lg-3 -->

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-info-circle"></i>
                                </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">Get 20% Off 1 Item</h3><!-- End .icon-box-title -->
                <p>When you sign up</p>
              </div><!-- End .icon-box-content -->
            </div><!-- End .icon-box -->
          </div><!-- End .col-sm-6 col-lg-3 -->

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
                                <span class="icon-box-icon">
                                    <i class="icon-life-ring"></i>
                                </span>

              <div class="icon-box-content">
                <h3 class="icon-box-title">We Support</h3><!-- End .icon-box-title -->
                <p>24/7 amazing services</p>
              </div><!-- End .icon-box-content -->
            </div><!-- End .icon-box -->
          </div><!-- End .col-sm-6 col-lg-3 -->
        </div><!-- End .row -->
      </div><!-- End .container-fluid -->
    </div><!-- End .icon-boxes-container-fluid -->

    <div class="footer-middle border-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-lg-6">
            <div class="widget widget-about">
              <img src="../../assets/images/logo.png" class="footer-logo" alt="Footer Logo" width="105" height="25">
              <p>Online mall </p>

              <div class="widget-about-info">
                <div class="row">
                  <div class="col-sm-6 col-md-4">
                    <span class="widget-about-title">Got Question? Call us 24/7</span>
                    <a href="tel:+16462395971">+1 (646) 2395 971</a>
                  </div><!-- End .col-sm-6 -->
                  <div class="col-sm-6 col-md-8">
                    <span class="widget-about-title">Payment Method</span>
                    <figure class="footer-payments">
                      <img src="../../assets/images/payments.png" alt="Payment methods" width="272" height="20">
                    </figure><!-- End .footer-payments -->
                  </div><!-- End .col-sm-6 -->
                </div><!-- End .row -->
              </div><!-- End .widget-about-info -->
            </div><!-- End .widget about-widget -->
          </div><!-- End .col-sm-12 col-lg-3 -->

          <div class="col-sm-4 col-lg-2">
            <div class="widget">
              <h4 class="widget-title">My Account</h4><!-- End .widget-title -->

              <ul class="widget-list">
                <li v-if="$store.getters.user.id">{{ $store.getters.user.name }}</li>
                <li v-else><a @click.prevent="$store.dispatch('showAuthModal')" href="#">Sign In / Sign Up</a></li>
                <li><router-link :to="{ name: 'cart.index' }">View Cart</router-link></li>
                <li><router-link :to="{ name: 'cart.wishlist' }">My Wishlist</router-link></li>
              </ul><!-- End .widget-list -->
            </div><!-- End .widget -->
          </div><!-- End .col-sm-64 col-lg-3 -->
        </div><!-- End .row -->
      </div><!-- End .container-fluid -->
    </div><!-- End .footer-middle -->

    <div class="footer-bottom">
      <div class="container-fluid">
        <p class="footer-copyright">Copyright © 2023 Megazone. All Rights Reserved.</p><!-- End .footer-copyright -->
        <ul class="footer-menu">
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul><!-- End .footer-menu -->

        <div class="social-icons social-icons-color">
          <span class="social-label">Social Media</span>
          <a href="#" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
          <a href="#" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
          <a href="#" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
          <a href="#" class="social-icon social-youtube" title="Youtube" target="_blank"><i class="icon-youtube"></i></a>
          <a href="#" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
        </div><!-- End .soial-icons -->
      </div><!-- End .container-fluid -->
    </div><!-- End .footer-bottom -->
  </footer>
</template>

<script>
export default {
  name: "SiteFooter"
}
</script>

<style scoped>

</style>