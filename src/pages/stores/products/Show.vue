<template>
  <headings
    :breadcrumbs="breadcrumbs"
    :title="product.title"
    is-store
  />
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-10">
          <div class="product-details-top">
            <div class="row">
              <div class="col-md-6 col-lg-7">
                <div class="product-gallery">
                  <figure v-if="helper.file" class="product-main-image">
                    <span v-if="product.sale" class="product-label label-sale">-{{ product.sale }}%</span>
                    <span v-if="product.new" class="product-label label-new">New</span>
                    <img-zoom
                        :img-normal="helper.file.path"
                        :img-zoom="helper.file.path"
                        :scale="1.5"
                    />

                    <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                      <i class="icon-arrows"></i>
                    </a>
                  </figure><!-- End .product-main-image -->

                  <div id="product-zoom-gallery" class="product-image-gallery max-col-6">
                    <a v-for="file in helper.files" :key="file.id" @click.prevent="helper.file = file" class="product-gallery-item" :class="{ active: file.id === helper.file.id }" href="#">
                      <img :src="file.path" alt="product side">
                    </a>

                  </div><!-- End .product-image-gallery -->
                </div><!-- End .product-gallery -->
              </div><!-- End .col-lg-7 -->

              <div class="col-md-6 col-lg-5">
                <div class="product-details">
                  <h1 class="product-title">{{ product.title }}</h1><!-- End .product-title -->

                  <div class="ratings-container">
                    <div class="ratings" :title="product.rating">
                      <div class="ratings-val" :style="{ width: (product.rating * 100 / 5) + '%' }"></div><!-- End .ratings-val -->
                    </div><!-- End .ratings -->
                    <a class="ratings-text" href="#product-accordion" @click="showAccordion('reviews')" id="review-link">( {{ product.numberOfReviews }} {{ lang.app.reviewCount }} )</a>
                  </div><!-- End .rating-container -->

                  <div class="product-price">
                    <span class="new-price">${{ product.price }}</span>
                    <span v-if="product.sale" class="old-price">${{ product.oldPrice }}</span>
                  </div><!-- End .product-price -->

                  <a v-if="product.description" @click="showAccordion('description')" href="#product-accordion-desc" class="product-content product-description-ellipsis" v-html="product.description"></a><!-- End .product-content -->

                  <form @submit.prevent="cart.addItem(item, product, helper.qty, helper.size, helper.color)">
                    <div v-if="product.colors.length > 0" class="details-filter-row details-row-size">
                      <label>{{ lang.app.color }}:</label>

                      <div class="product-nav product-nav-thumbs">
                        <a v-for="color in product.colors" :key="color.id" @click.prevent="helper.color = color" href="#" :class="{ active: helper.color && color.id === helper.color.id }" :style="{ backgroundColor: color.addition }"></a>
                      </div><!-- End .product-nav -->
                    </div><!-- End .details-filter-row -->

                    <div v-if="product.sizes.length > 0" class="details-filter-row details-row-size">
                      <label>{{ lang.app.size }}:</label>
                      <div class="select-custom">
                        <v-select
                            v-model="helper.size"
                            class="form-control"
                            required
                            :optoins="product.sizes"
                            label="title"
                        />
                      </div><!-- End .select-custom -->
                    </div><!-- End .details-filter-row -->

                    <div class="details-filter-row details-row-size">
                      <label for="qty">{{ lang.app.qty }}:</label>
                      <div class="product-details-quantity">
                        <input v-model="helper.qty" type="number" id="qty" class="form-control" min="1" step="1" required>
                      </div><!-- End .product-details-quantity -->
                    </div><!-- End .details-filter-row -->

                    <div class="product-details-action">
                      <button type="submit" class="btn-product btn-cart"><span>{{ lang.app.addToCart }}</span></button>

                      <div class="details-action-wrapper">
                        <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>{{ lang.app.addToWishlist }}</span></a>
                        <a href="#" class="btn-product btn-compare" title="Compare"><span>{{ lang.app.addToCompare }}</span></a>
                      </div><!-- End .details-action-wrapper -->
                    </div><!-- End .product-details-action -->
                  </form>

                  <div class="product-details-footer">
                    <div class="product-cat">
                      <span>{{ lang.app.category }}:</span>
                      <router-link v-for="(category,key) in product.categories" :key="key" :to="{ name: 'stores.categories.show', params: { id: category.id } }"><span v-if="key">, </span>{{ category.name }}</router-link>
                    </div><!-- End .product-cat -->

                    <div class="social-icons social-icons-sm">
                      <span class="social-label">{{ lang.app.share }}:</span>
                      <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                      <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                      <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                      <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                    </div>
                  </div><!-- End .product-details-footer -->

                  <div class="accordion accordion-plus product-details-accordion" id="product-accordion">
                    <div v-if="product.description" id="product-accordion-desc" class="card card-box card-sm">
                      <div class="card-header" id="product-desc-heading">
                        <h2 class="card-title">
                          <a :class="{ collapsed: !helper.accordion.description }" @click="showAccordion('description')" role="button" data-toggle="collapse" href="#product-accordion-desc" aria-expanded="false" aria-controls="product-accordion-desc">
                            {{ lang.app.description }}
                          </a>
                        </h2>
                      </div><!-- End .card-header -->
                      <div class="collapse" :class="{ show: helper.accordion.description }" aria-labelledby="product-desc-heading" data-parent="#product-accordion">
                        <div class="card-body">
                          <div class="product-desc-content" v-html="product.description"></div><!-- End .product-desc-content -->
                        </div><!-- End .card-body -->
                      </div><!-- End .collapse -->
                    </div><!-- End .card -->

                    <div id="product-accordion-info" class="card card-box card-sm">
                      <div class="card-header" id="product-info-heading">
                        <h2 class="card-title">
                          <a :class="{ collapsed: !helper.accordion.properties }" @click="showAccordion('properties')" role="button" data-toggle="collapse" href="#product-accordion-info" aria-expanded="false" aria-controls="product-accordion-info">
                            {{ lang.app.details }}
                          </a>
                        </h2>
                      </div><!-- End .card-header -->
                      <div class="collapse" :class="{ show: helper.accordion.properties }" aria-labelledby="product-info-heading" data-parent="#product-accordion">
                        <div class="card-body">
                          <div class="product-desc-content">
                            <table class="table table-striped">
                              <tbody>
                              <tr v-for="(propField, key) in product.fields" :key="key">
                                <td>{{ propField.field.name }}</td>
                                <td>{{ propField.value }}</td>
                                <td>{{ propField.field.addon }}</td>
                              </tr>
                              </tbody>
                            </table>
                          </div><!-- End .product-desc-content -->
                        </div><!-- End .card-body -->
                      </div><!-- End .collapse -->
                    </div><!-- End .card -->

                    <div id="product-accordion-review" class="card card-box card-sm">
                      <div class="card-header" id="product-review-heading">
                        <h2 class="card-title">
                          <a :class="{ collapsed: !helper.accordion.reviews }"  @click="showAccordion('reviews')" role="button" data-toggle="collapse" href="#product-accordion-review" aria-expanded="true" aria-controls="product-accordion-review">
                            {{ lang.app.reviews }} ({{ reviews.meta.total || product.numberOfReviews }})
                          </a>
                        </h2>
                      </div><!-- End .card-header -->
                      <div class="collapse" :class="{ show: helper.accordion.reviews }" aria-labelledby="product-review-heading" data-parent="#product-accordion">
                        <div class="card-body">
                          <button @click="modals.addReview = true" type="button" class="btn btn-primary"><i class="la la-plus"></i> {{ lang.app.addReview }}</button>
                          <div class="reviews mt-2">
                            <div v-for="(review, key) in reviews.data" :key="key" class="review">
                              <div class="row no-gutters">
                                <div class="col-auto">
                                  <h4><a href="#">{{ review.name }}</a></h4>
                                  <div class="ratings-container">
                                    <div class="ratings">
                                      <div class="ratings-val" :style="{ width: (review.rating * 100 / 5) + '%' }"></div><!-- End .ratings-val -->
                                    </div><!-- End .ratings -->
                                  </div><!-- End .rating-container -->
                                  <span class="review-date">{{ review.createdAt }}</span>
                                </div><!-- End .col -->
                                <div class="col">
                                  <div class="review-content">
                                    <p>{{ review.message }}</p>
                                  </div><!-- End .review-content -->

                                  <div class="review-action">
                                    <a @click.prevent="addReaction(key, true)" href="#"><i class="icon-thumbs-up"></i>{{ lang.app.helpful }} ({{ review.helpful }})</a>
                                    <a @click.prevent="addReaction(key, false)" href="#"><i class="icon-thumbs-down"></i>{{ lang.app.unhelpful }} ({{ review.unhelpful }})</a>
                                  </div><!-- End .review-action -->
                                </div><!-- End .col-auto -->
                              </div><!-- End .row -->
                            </div><!-- End .review -->
                          </div><!-- End .reviews -->
                          <div class="mt-2">
                            <pagination :pagination="reviews.meta" @change="fetchReviews" v-model="reviews.filterForm.page"/>
                          </div>
                        </div><!-- End .card-body -->
                      </div><!-- End .collapse -->
                    </div><!-- End .card -->
                  </div><!-- End .accordion -->
                </div><!-- End .product-details -->
              </div><!-- End .col-lg-5 -->
            </div><!-- End .row -->
          </div><!-- End .product-details-top -->
        </div><!-- End .col-xl-10 -->

        <aside class="col-xl-2 d-md-none d-xl-block">
          <div class="sidebar sidebar-product">
            <div class="widget widget-products">
              <h4 class="widget-title">Related Product</h4><!-- End .widget-title -->

              <div class="products">
                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="../../../assets/images/products/single/sidebar/1.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title"><a href="product.html">Light brown studded <br>Wide fit wedges</a></h5><!-- End .product-title -->
                    <div class="product-price">
                      <span class="new-price">$50.00</span>
                      <span class="old-price">$110.00</span>
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="../../../assets/images/products/single/sidebar/2.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title"><a href="product.html">Yellow button front tea top</a></h5><!-- End .product-title -->
                    <div class="product-price">
                      $56.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="../../../assets/images/products/single/sidebar/3.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title"><a href="product.html">Beige metal hoop tote bag</a></h5><!-- End .product-title -->
                    <div class="product-price">
                      $50.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->

                <div class="product product-sm">
                  <figure class="product-media">
                    <a href="product.html">
                      <img src="../../../assets/images/products/single/sidebar/4.jpg" alt="Product image" class="product-image">
                    </a>
                  </figure>

                  <div class="product-body">
                    <h5 class="product-title"><a href="product.html">Black soft RI weekend <br>travel bag</a></h5><!-- End .product-title -->
                    <div class="product-price">
                      $75.00
                    </div><!-- End .product-price -->
                  </div><!-- End .product-body -->
                </div><!-- End .product product-sm -->
              </div><!-- End .products -->

              <a href="category.html" class="btn btn-outline-dark-3"><span>View More Products</span><i class="icon-long-arrow-right"></i></a>
            </div><!-- End .widget widget-products -->

            <div class="widget widget-banner-sidebar">
              <div class="banner-sidebar-title">ad box 280 x 280</div><!-- End .ad-title -->

              <div class="banner-sidebar banner-overlay">
                <a href="#">
                  <img src="../../../assets/images/blog/sidebar/banner.jpg" alt="banner">
                </a>
              </div><!-- End .banner-ad -->
            </div><!-- End .widget -->
          </div><!-- End .sidebar sidebar-product -->
        </aside><!-- End .col-xl-2 -->
      </div><!-- End .row -->

    </div><!-- End .container-fluid -->
  </div>

  <modal
      v-model="modals.addReview"
      :modal-title="lang.app.addReview"

  >
    <form @submit.prevent="addReview" class="p-4">
      <div class="form-group">
        <label class="form-label">{{ lang.app.yourName }}<span class="text-danger">*</span></label>
        <input v-model="reviews.form.name" required type="text" class="form-control"/>
      </div>
      <div class="form-group">
        <label class="form-label">{{ lang.app.review }}<span class="text-danger">*</span></label>
        <textarea v-model="reviews.form.message" class="form-control" required></textarea>
      </div>
      <div class="form-group">
        <label class="form-label">{{ lang.app.evaluation }}<span class="text-danger">*</span></label>
        <div class="ratings-container">
          <div class="ratings">
            <div class="ratings-val" :style="{ width: (reviews.form.rating * 100 / 5) + '%' }"></div><!-- End .ratings-val -->
            <div class="flex-nowrap text-center position-absolute" style="top:0">
              <input v-model="reviews.form.rating" name="rating" :value="1" required type="radio" class="d-inline-block" style="width: 15px; height: 15px; opacity: 0">
              <input v-model="reviews.form.rating" name="rating" :value="2" type="radio" class="d-inline-block" style="width: 15px; height: 15px; opacity: 0">
              <input v-model="reviews.form.rating" name="rating" :value="3" type="radio" class="d-inline-block" style="width: 15px; height: 15px; opacity: 0">
              <input v-model="reviews.form.rating" name="rating" :value="4" type="radio" class="d-inline-block" style="width: 15px; height: 15px; opacity: 0">
              <input v-model="reviews.form.rating" name="rating" :value="5" type="radio" class="d-inline-block" style="width: 15px; height: 15px; opacity: 0">
            </div>
          </div><!-- End .ratings -->
        </div><!-- End .rating-container -->
      </div>
      <button v-if="store.getters.user.id" type="submit" class="btn btn-secondary">{{ lang.app.save }}</button>
      <a v-else @click.prevent="modals.addReview = false;store.dispatch('showAuthModal')" href="#" class="ml-3">{{ lang.app.requiresAuthentication }}</a>
    </form>
  </modal>
</template>

<script setup>
import Headings from "../../../components/header/Headings.vue";
import {useAxios} from "../../../plugins/vue-axios";
import {useCart, useLang, useUrls} from "../../../plugins/globals";
import Store from "../../../components/stores/Store.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {reactive, watch} from "vue";
import ImgZoom from "../../../components/partials/ImgZoom.vue";
import Pagination from "../../../components/partials/Pagination.vue";
import Modal from "../../../components/partials/Modal.vue";
import VSelect from "../../../components/partials/VSelect.vue";

const urls = useUrls()

const route = useRoute()

const lang = useLang()

const store = useStore()

const cart = useCart()

const item = await store.dispatch('fetchStore', route.params.store)

const product = (await useAxios().get(
    urls.storeProduct.replace(':storeId', route.params.store)
        .replace(':productId', route.params.id))
).data

const helper = reactive({
  color: product.colors.length > 0 ? product.colors[0] : null,
  size: null,
  qty: 1,
  files: product.colors.length > 0 ? product.files.filter(file => file.colorId === product.colors[0].id) : product.files,
  file: '',
  accordion: {
    description: true,
    properties: false,
    reviews: false
  }
})

const reviews = reactive({
  data: [],
  meta: {},
  filterForm: {
    page: 1
  },
  form: {
    name: '',
    message: '',
    rating: ''
  }
})

const modals = reactive({
  addReview: false
})

helper.file = helper.files[0]

watch(() => helper.colorId, (first) => {
  helper.files = product.files.filter(file => file.colorId === first)
  helper.file = helper.files[0]
})

watch(() => helper.accordion.reviews, (status) => {
  if (status && reviews.data.length === 0)
    fetchReviews()
})

function showAccordion(name) {
  for (let key in helper.accordion)
    helper.accordion[key] = name === key;
}

function fetchReviews() {
  useAxios().get(
      urls.storeProductReviews.replace(':storeId', route.params.store)
          .replace(':productId', route.params.id),
      {
        params: reviews.filterForm
      }
  ).then(res => {
    reviews.data = res.data.data
    reviews.meta = res.data.meta
  })
}

function addReview() {
  useAxios().post(
      urls.storeProductReviews.replace(':storeId', route.params.store)
          .replace(':productId', route.params.id),
      reviews.form
  ).then(res => {
    reviews.data = [res.data, ...reviews.data]
    modals.addReview = false
    reviews.meta.total++
  })
}

function addReaction(reviewKey, status) {
  useAxios().post(
      urls.storeProductReviewReaction.replace(':storeId', route.params.store)
          .replace(':productId', route.params.id)
          .replace(':reviewId', reviews.data[reviewKey].id),
      { status: status }
  ).then(res => {
    reviews.data[reviewKey].helpful = res.data.helpful;
    reviews.data[reviewKey].unhelpful = res.data.unhelpful;
  })
}

const breadcrumbs = [
  {
    label: lang.app.stores,
    route: {
      name: 'stores.index'
    }
  },
  {
    label: item.name,
    route: {
      name: 'stores.show',
      params: {
        store: item.slug
      }
    }
  },
  ...(product.categories.map(category => ({
    label: category.name,
    route: {
      name: 'stores.categories.show',
      params: {
        id: category.id
      }
    }
  }))),
  {
    label: product.title
  }
]
</script>

<style scoped>

</style>