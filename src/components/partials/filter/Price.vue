<template>
  <div class="widget">
    <h3 class="widget-title">Price</h3><!-- End .widget-title -->

    <div class="widget-body">
      <div class="filter-items">
        <div class="filter-item">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="price-1" name="filter-price">
            <label class="custom-control-label" for="price-1">Under $25</label>
          </div><!-- End .custom-checkbox -->
        </div><!-- End .filter-item -->

        <div class="filter-item">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="price-2" name="filter-price">
            <label class="custom-control-label" for="price-2">$25 to $50</label>
          </div><!-- End .custom-checkbox -->
        </div><!-- End .filter-item -->

        <div class="filter-item">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="price-3" name="filter-price">
            <label class="custom-control-label" for="price-3">$50 to $100</label>
          </div><!-- End .custom-checkbox -->
        </div><!-- End .filter-item -->

        <div class="filter-item">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="price-4" name="filter-price">
            <label class="custom-control-label" for="price-4">$100 to $200</label>
          </div><!-- End .custom-checkbox -->
        </div><!-- End .filter-item -->

        <div class="filter-item">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="price-5" name="filter-price">
            <label class="custom-control-label" for="price-5">$200 &amp; Above</label>
          </div><!-- End .custom-checkbox -->
        </div><!-- End .filter-item -->
      </div><!-- End .filter-items -->
    </div><!-- End .widget-body -->
  </div><!-- End .widget -->
</template>

<script>
export default {
  name: "Price"
}
</script>

<style scoped>

</style>