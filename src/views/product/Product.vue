<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <product-item v-for="product in products" :key="product.id" :product="product" class="product-item" />
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import ProductItem from '../../components/ProductItem.vue';

export default {
  data: function () {
    return {
      products: []
    }
  },
  async created() {
    const result = await axios.get('http://localhost:8000/api/products');
    this.products = result.data;
  },
  components: {
    ProductItem
  }
}
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 32%;
}

.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>