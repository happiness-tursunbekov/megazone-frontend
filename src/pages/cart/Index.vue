<template>
  <headings :title="$lang.app.cart"/>
  <div class="cart">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9">
          <table class="table table-cart table-mobile">
            <thead>
            <tr>
              <th>Product</th>
              <th>Store</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(item,key) in cart.items" :key="key">
              <td class="product-col">
                <div class="product">
                  <figure class="product-media">
                    <router-link :to="{ name: 'stores.products.show', params: { store: item.store.slug, id: item.product.id } }">
                      <img :src="item.product.files[0].path" alt="Product image" style="width: 64px">
                    </router-link>
                  </figure>

                  <h3 class="product-title">
                    <router-link :to="{ name: 'stores.products.show', params: { store: item.store.slug, id: item.product.id } }">{{ item.product.title }}</router-link>
                  </h3><!-- End .product-title -->
                </div><!-- End .product -->
              </td>
              <td class="price-col"><router-link :to="{ name: 'stores.show', params: { store: item.store.slug } }">{{ item.store.name }}</router-link></td>
              <td class="price-col">${{ item.price }}</td>
              <td class="quantity-col">
                <div class="cart-product-quantity">
                  <input type="number" class="form-control" @input="cart.updateTotal" v-model="item.qty" min="1" step="1" required>
                </div><!-- End .cart-product-quantity -->
              </td>
              <td class="total-col">${{ item.price * item.qty }}</td>
              <td class="remove-col"><button @click="cart.removeItem(key)" class="btn-remove"><i class="icon-close"></i></button></td>
            </tr>
            </tbody>
          </table><!-- End .table table-wishlist -->
        </div><!-- End .col-lg-9 -->
        <aside class="col-lg-3">
          <div class="summary summary-cart">
            <h3 class="summary-title">Cart Total</h3><!-- End .summary-title -->

            <table class="table table-summary">
              <tbody>
              <tr class="summary-subtotal">
                <td>Subtotal:</td>
                <td>${{ cart.subtotalPrice }}</td>
              </tr><!-- End .summary-subtotal -->
              <tr class="summary-shipping">
                <td>Shipping:</td>
                <td>&nbsp;</td>
              </tr>

              <tr class="summary-shipping-row">
                <td>
                  <div class="custom-control custom-radio">
                    <input v-model="cart.shippingType" value="free" type="radio" id="free-shipping" name="shipping" class="custom-control-input">
                    <label class="custom-control-label" for="free-shipping">Free Shipping</label>
                  </div><!-- End .custom-control -->
                </td>
                <td>$0.00</td>
              </tr><!-- End .summary-shipping-row -->

              <tr class="summary-shipping-row">
                <td>
                  <div class="custom-control custom-radio">
                    <input v-model="cart.shippingType" value="standard" type="radio" id="standart-shipping" name="shipping" class="custom-control-input">
                    <label class="custom-control-label" for="standart-shipping">Standart:</label>
                  </div><!-- End .custom-control -->
                </td>
                <td>$10.00</td>
              </tr><!-- End .summary-shipping-row -->

              <tr class="summary-shipping-row">
                <td>
                  <div class="custom-control custom-radio">
                    <input v-model="cart.shippingType" value="express" type="radio" id="express-shipping" name="shipping" class="custom-control-input">
                    <label class="custom-control-label" for="express-shipping">Express:</label>
                  </div><!-- End .custom-control -->
                </td>
                <td>$20.00</td>
              </tr><!-- End .summary-shipping-row -->

              <tr class="summary-total">
                <td>Total:</td>
                <td>${{ cart.subtotalPrice + shippingTypes[cart.shippingType] }}</td>
              </tr><!-- End .summary-total -->
              </tbody>
            </table><!-- End .table table-summary -->

            <router-link :to="{ name: 'cart.checkout' }" class="btn btn-outline-primary-2 btn-order btn-block">PROCEED TO CHECKOUT</router-link>
          </div><!-- End .summary -->
        </aside><!-- End .col-lg-3 -->
      </div><!-- End .row -->
    </div><!-- End .container -->
  </div>
</template>

<script>
import Headings from "../../components/header/Headings.vue";

export default {
  name: "Index",
  components: {Headings},

  data() {
    return {
      shippingTypes: {
        free: 0,
        standard: 10,
        express: 20
      },
    }
  },

  computed: {
    cart() {
      return this.$cart
    }
  }
}
</script>

<style scoped>

</style>