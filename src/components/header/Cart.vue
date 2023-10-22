<template>
  <div class="dropdown cart-dropdown">
    <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
      <i class="icon-shopping-cart"></i>
      <span class="cart-count">{{ $cart.totalQty }}</span>
      <span class="cart-txt">Cart</span>
    </a>

    <div class="dropdown-menu dropdown-menu-right">
      <div class="dropdown-cart-products">
        <div v-for="(item,key) in $cart.items" class="product">
          <div class="product-cart-details">
            <h4 class="product-title">
              <router-link :to="{ name: 'stores.products.show', params: { store: item.store.slug, id: item.product.id } }">{{ item.product.title }}</router-link>
            </h4>

            <span class="cart-product-info"><span class="cart-product-qty">{{ item.qty }}</span>x ${{ item.price }}</span>
          </div><!-- End .product-cart-details -->

          <figure class="product-image-container-fluid">
            <router-link :to="{ name: 'stores.products.show', params: { store: item.store.slug, id: item.product.id } }" class="product-image">
              <img :src="item.product.files[0].path" alt="product" style="width: 64px">
            </router-link>
          </figure>
          <a @click.prevent="$cart.removeItem(key)" href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
        </div><!-- End .product -->
      </div><!-- End .cart-product -->

      <div class="dropdown-cart-total">
        <span>Subtotal</span>

        <span class="cart-total-price">${{ $cart.subtotalPrice }}</span>
      </div><!-- End .dropdown-cart-total -->

      <div>
        <div class="summary-shipping">
          Shipping:
        </div>

        <div v-for="(val,key) in $cart.shippingTypes" :key="key">
            <div class="custom-control custom-radio">
              <input v-model="$cart.shippingType" :value="key" type="radio" :id="key + 'widget'" name="shipping-widget" class="custom-control-input">
              <label class="custom-control-label" :for="key + 'widget'">{{ $lang.app[key] }}(${{ val }})</label>
            </div>
        </div><!-- End .summary-shipping-row -->
      </div>

      <div class="dropdown-cart-action">
        <router-link :to="{ name: 'cart.index' }" class="btn btn-primary">View Cart</router-link>
        <router-link :to="{ name: 'cart.checkout' }" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></router-link>
      </div><!-- End .dropdown-cart-total -->
    </div><!-- End .dropdown-menu -->
  </div>
</template>

<script>
export default {
  name: "Cart",
  mounted() {
    if (!import.meta.env.SSR) {
      const cartData = window.localStorage.getItem('cart')
      if (cartData) {
        const cartDataObj = JSON.parse(cartData)
        if (cartDataObj.items && cartDataObj.items.length > 0) {
          this.$cart.items = cartDataObj.items
          this.$cart.shippingType = cartDataObj.shippingType
          this.$cart.updateTotal()
        }
      }
    }
  }
}

</script>

<style scoped>

</style>