<template>
  <div v-for="(item, key) in categories" :key="key" class="position-relative  pt-1" :class="{ 'child-el': parentId }">
    <div class="input-group input-group-el">
      <div class="input-group-prepend">
        <button v-if="item.children.length > 0" @click="item.open = !item.open" class="btn btn-arrow btn-light" type="button">
          <i v-if="item.open" class="la la-angle-down"></i>
          <i v-else class="la la-angle-right"></i>
        </button>
      </div>
      <button @click="selectCategory(item)" type="button" class="btn form-control-plaintext btn-light text-left">
        {{ item.name }}
      </button>
    </div>
    <div v-if="item.children.length > 0 && item.open" class="child">
      <categories-tree
          v-model:categories="item.children"
          v-model="category"
          :parent-id="item.id"
          :close="close"
      ></categories-tree>
    </div><!-- End .collapse -->
  </div>
</template>

<script>
export default {
  name: "CategoriesTree",

  props: {
    modelValue: Object,
    categories: Array,
    parentId: [Number, String],
    close: Function
  },

  data() {
    return {
      category: this.modelValue
    }
  },

  watch: {
    modelValue(cat) {
      this.category = cat
    },
    category(cat) {
      this.$emit('update:modelValue', cat)
    }
  },

  methods: {
    selectCategory(category) {
      this.category = category
      this.close()
    }
  }
}
</script>

<style scoped>
.child {
  position: relative;
  margin-left: 16px;
}
.child-el:before {
  position: absolute;
  text-align : center;
  content: "___";
  left:-14px;
  top: 12px
}
.child-el:after {
  display:block;/* probably not really needed? */
  content: "";
  width:1px;
  height:100%;/* slight higher to work around rounding errors(?) on some zoom levels in some browsers. */
  background-color:#000000;
  position: absolute;
  top:0;
  left: -15px;
}
.input-group-el {
  border-left: 3px solid #39f;
  z-index: 1;
}
</style>