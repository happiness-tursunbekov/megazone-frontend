<template>
  <div v-if="toolbox" class="toolbox">
    <div class="toolbox-left">
      <div class="toolbox-info">
        Showing <span>{{ pagination.from }} - {{ pagination.to }} of {{ pagination.total }}</span> Products
      </div><!-- End .toolbox-info -->
    </div><!-- End .toolbox-left -->

    <div class="toolbox-right">
      <div class="toolbox-sort">
        <label>Sort by:</label>
        <div class="select-custom">
          <select name="sortby" id="sortby" class="form-control">
            <option value="popularity" selected="selected">Most Popular</option>
            <option value="rating">Most Rated</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div><!-- End .toolbox-sort -->
      <div class="toolbox-layout">
        <a href="category-list.html" class="btn-layout">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4"></rect>
            <rect x="6" y="0" width="10" height="4"></rect>
            <rect x="0" y="6" width="4" height="4"></rect>
            <rect x="6" y="6" width="10" height="4"></rect>
          </svg>
        </a>

        <a href="category-2cols.html" class="btn-layout">
          <svg width="10" height="10">
            <rect x="0" y="0" width="4" height="4"></rect>
            <rect x="6" y="0" width="4" height="4"></rect>
            <rect x="0" y="6" width="4" height="4"></rect>
            <rect x="6" y="6" width="4" height="4"></rect>
          </svg>
        </a>

        <a href="category.html" class="btn-layout">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4"></rect>
            <rect x="6" y="0" width="4" height="4"></rect>
            <rect x="12" y="0" width="4" height="4"></rect>
            <rect x="0" y="6" width="4" height="4"></rect>
            <rect x="6" y="6" width="4" height="4"></rect>
            <rect x="12" y="6" width="4" height="4"></rect>
          </svg>
        </a>

        <a href="category-4cols.html" class="btn-layout active">
          <svg width="22" height="10">
            <rect x="0" y="0" width="4" height="4"></rect>
            <rect x="6" y="0" width="4" height="4"></rect>
            <rect x="12" y="0" width="4" height="4"></rect>
            <rect x="18" y="0" width="4" height="4"></rect>
            <rect x="0" y="6" width="4" height="4"></rect>
            <rect x="6" y="6" width="4" height="4"></rect>
            <rect x="12" y="6" width="4" height="4"></rect>
            <rect x="18" y="6" width="4" height="4"></rect>
          </svg>
        </a>
      </div><!-- End .toolbox-layout -->
    </div><!-- End .toolbox-right -->
  </div>
  <slot/>
  <nav v-if="pagination.lastPage > 1" aria-label="Page navigation">
    <ul class="pagination">
      <li v-if="pagination.currentPage > 1" class="page-item disabled">
        <a @click.prevent="toPage(pagination.currentPage-1)" class="page-link page-link-prev" href="#">
          <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>
        </a>
      </li>
      <li v-if="pagination.currentPage > 2" class="page-item">
        <a @click.prevent="toPage(1)" class="page-link" href="#">1</a>
      </li>
      <li v-if="pagination.currentPage > 3" class="page-item">
        <a @click.prevent="toPage(getMiddlePage(1, pagination.currentPage))" class="page-link" href="#">2</a>
      </li>
      <li v-if="pagination.currentPage > 1" class="page-item">
        <a @click.prevent="toPage(pagination.currentPage-1)" class="page-link" href="#">{{ pagination.currentPage-1 }}</a>
      </li>
      <li class="page-item active" aria-current="page">
        <a class="page-link" type="button">{{ pagination.currentPage }}</a>
      </li>
      <li v-if="pagination.lastPage !== pagination.currentPage" class="page-item">
        <a @click.prevent="toPage(pagination.currentPage+1)" class="page-link" href="#">{{ pagination.currentPage+1 }}</a>
      </li>
      <li v-if="pagination.lastPage - pagination.currentPage > 2" class="page-item">
        <a @click.prevent="toPage(getMiddlePage(pagination.currentPage, pagination.lastPage))" class="page-link" href="#">123</a>
      </li>
      <li v-if="pagination.lastPage - pagination.currentPage > 1" class="page-item">
        <a @click.prevent="toPage(pagination.lastPage)" class="page-link" href="#">2</a>
      </li>
      <li class="page-item-total">из {{ pagination.lastPage }}</li>
      <li class="page-item">
        <a @click.prevent="toPage(pagination.currentPage+1)" class="page-link page-link-next" href="#" aria-label="Next">
          <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    modelValue: [Number, String],
    pagination: Object,
    disableAutoScroll: Boolean,
    limit: Number,
    query: Object,
    toolbox: Boolean
  },

  emits: ['update:modelValue', 'change'],

  methods: {
    toPage(page) {
      this.$emit('update:modelValue', page);
      this.$emit('change', { ...this.query, page });
      if (!this.disableAutoScroll)
        window.scrollTo(0, 0);
    },
    getMiddlePage(first, second) {
      return Math.floor((second - first) / 2 + first);
    }
  }
}
</script>

<style scoped>

</style>