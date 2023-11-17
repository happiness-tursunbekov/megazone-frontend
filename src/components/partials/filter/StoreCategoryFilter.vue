<template>
  <form @submit.prevent="filter" class="sidebar sidebar-shop">
    <div class="widget widget-clean">
      <label>Filters:</label>
      <a href="#" class="sidebar-filter-clear">Clean All</a>
    </div><!-- End .widget widget-clean -->

    <div v-if="category.children.length > 0" class="widget widget-collapsible">
      <h3 class="widget-title">
        <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
          {{ category.name }}
        </a>
      </h3><!-- End .widget-title -->

      <div class="collapse show" id="widget-1">
        <div class="widget-body widget-categories">
          <store-category-tree :categories="category.children"/>
        </div><!-- End .widget-body -->
      </div><!-- End .collapse -->
    </div><!-- End .widget -->

    <div v-if="category.sizes.length > 0" class="widget widget-collapsible">
      <h3 class="widget-title">
        <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
          Size
        </a>
      </h3><!-- End .widget-title -->

      <div class="collapse show" id="widget-2">
        <div class="widget-body">
          <div class="filter-items">
            <div v-for="size in category.sizes" :key="size.id" class="filter-item">
              <div class="custom-control custom-checkbox">
                <input v-model="filterForm.sizeIds" type="checkbox" class="custom-control-input" :value="size.id" :id="'size-' + size.id">
                <label class="custom-control-label" :for="'size-' + size.id">{{ size.title }}</label>
              </div><!-- End .custom-checkbox -->
            </div><!-- End .filter-item -->
          </div><!-- End .filter-items -->
        </div><!-- End .widget-body -->
      </div><!-- End .collapse -->
    </div><!-- End .widget -->

    <div v-if="category.colors.length > 0" class="widget widget-collapsible">
      <h3 class="widget-title">
        <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
          Colour
        </a>
      </h3><!-- End .widget-title -->

      <div class="collapse show" id="widget-3">
        <div class="widget-body">
          <div class="filter-colors">
            <a v-for="color in category.colors" :key="color.id" href="#" @click.prevent="filterForm.colorId = filterForm.colorId === color.id ? '' : color.id" :class="{ selected: color.id === filterForm.colorId }" :style="`background: ${color.addition};`"><span class="sr-only">{{ color.title }}</span></a>
          </div><!-- End .filter-colors -->
        </div><!-- End .widget-body -->
      </div><!-- End .collapse -->
    </div><!-- End .widget -->

    <div v-if="category.brands.length > 0" class="widget widget-collapsible">
      <h3 class="widget-title">
        <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
          Brand
        </a>
      </h3><!-- End .widget-title -->

      <div class="collapse show" id="widget-4">
        <div class="widget-body">
          <div class="filter-items">
            <div v-for="brand in category.brands" :key="brand.id" class="filter-item">
              <div class="custom-control custom-checkbox">
                <input v-model="filterForm.brandIds" type="checkbox" class="custom-control-input" :value="brand.id" :id="'brand-' + brand.id">
                <label class="custom-control-label" :for="'brand-' + brand.id">{{ brand.name }}</label>
              </div><!-- End .custom-checkbox -->
            </div><!-- End .filter-item -->

          </div><!-- End .filter-items -->
        </div><!-- End .widget-body -->
      </div><!-- End .collapse -->
    </div><!-- End .widget -->

    <div class="widget widget-collapsible">
      <h3 class="widget-title">
        <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
          Price
        </a>
      </h3><!-- End .widget-title -->

      <div class="collapse show" id="widget-5">
        <div class="widget-body">
          <div class="filter-price">
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label class="form-label">From</label>
                  <input v-model="filterForm.priceFrom" type="number" class="form-control" min="0">
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label class="form-label">To</label>
                  <input v-model="filterForm.priceTo" type="number" class="form-control" min="1">
                </div>
              </div>
            </div>
          </div><!-- End .filter-price -->
          <div class="text-right w-100">
            <button type="submit" class="btn btn-primary"><i class="icon icon-search"></i> {{ $lang.app.filter }}</button>
            <button type="button" class="btn btn-light">{{ $lang.app.clean }}</button>
          </div>
        </div><!-- End .widget-body -->
      </div><!-- End .collapse -->
    </div><!-- End .widget -->
  </form>
</template>
<script setup>

import {reactive, watch} from "vue";
import StoreCategoryTree from "../../stores/StoreCategoryTree.vue";

const props = defineProps({
  category: Object,
  query: Object
})

const emit = defineEmits(['change'])

const filterForm = reactive(props.query)

const filter = () => {
  emit('change', filterForm)
}

</script>

<style scoped>

</style>