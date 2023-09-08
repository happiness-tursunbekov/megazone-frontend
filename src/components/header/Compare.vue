<template>
  <div class="dropdown compare-dropdown">
    <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
      <i class="icon-random"></i>
      <span class="compare-txt">Compare</span>
    </a>

    <div class="dropdown-menu dropdown-menu-right">
      <ul class="compare-products">
        <li class="compare-product">
          <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
          <h4 class="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
        </li>
        <li class="compare-product">
          <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
          <h4 class="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
        </li>
      </ul>

      <div class="compare-actions">
        <a href="#" class="action-link">Clear All</a>
        <a href="#" class="btn btn-outline-primary-2"><span>Compare</span><i class="icon-long-arrow-right"></i></a>
      </div>
    </div><!-- End .dropdown-menu -->
  </div>
</template>

<script>
export default {
  name: "Compare"
}
</script>

<style scoped>

</style>