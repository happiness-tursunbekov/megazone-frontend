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
        <span>Total</span>

        <span class="cart-total-price">${{ $cart.subtotalPrice }}</span>
      </div><!-- End .dropdown-cart-total -->

      <div class="dropdown-cart-action">
        <router-link :to="{ name: 'cart.index' }" class="btn btn-primary">View Cart</router-link>
        <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
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
        const items = JSON.parse(cartData)
        if (items.length > 0) {
          this.$cart.items = items
          this.$cart.updateTotal()
        }
      }
    }
  }
}

</script>

<style scoped>

</style>