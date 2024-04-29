<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
      <cart-item v-for="item in cartItems" :key="item.id" :item="item" class="product-container"/>
      <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
    </div>
  </div>
</template>

<script>

import { cartItems } from '../../data-seed';
import CartItem from '../../components/CartItem.vue'

export default {
  data: function () {
    return {
      cartItems
    }
  },
  computed: {
    totalPrice: function () {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    }
  },
  components: {
    CartItem
  }
}
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41B883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}

.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
</style>