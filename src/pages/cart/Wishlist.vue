<template>
  <headings :title="$lang.app.wishlist"/>
  <div class="container-fluid">
    <table class="table table-wishlist table-mobile">
      <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Stock Status</th>
        <th></th>
        <th></th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(item, key) in wishlist" :key="key">
        <td class="product-col">
          <div class="product">
            <figure class="product-media">
              <a href="#">
                <img :src="item.product.files[0].path" style="width: 64px" alt="Product image">
              </a>
            </figure>

            <h3 class="product-title">
              <router-link :to="{ name: 'stores.products.show', params: { store: item.store.slug, id: item.product.id } }" href="#">{{ item.product.title }}</router-link>
            </h3><!-- End .product-title -->
          </div><!-- End .product -->
        </td>
        <td class="price-col">${{ item.product.price }}</td>
        <td class="stock-col"><span class="in-stock">In stock</span></td>
        <td class="action-col">
          <div class="dropdown">
            <button class="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icon-list-alt"></i>Select Options
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">First option</a>
              <a class="dropdown-item" href="#">Another option</a>
              <a class="dropdown-item" href="#">The best option</a>
            </div>
          </div>
        </td>
        <td class="remove-col"><button @click.prevent="$cart.removeFromWishlist(key)" class="btn-remove"><i class="icon-close"></i></button></td>
      </tr>
      </tbody>
    </table><!-- End .table table-wishlist -->
  </div>
</template>

<script>
import Headings from "../../components/header/Headings.vue";

export default {
  name: "Wishlist",
  components: {Headings},

  computed: {
    wishlist() {
      return this.$cart.wishlist
    }
  }
}
</script>

<style scoped>

</style>