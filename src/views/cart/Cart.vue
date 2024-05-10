<template>
  <div>
    <div id="page-wrap">
      <h1>Shopping Cart</h1>
      <cart-item v-for="item in cartItems" :key="item.id" :item="item" v-on:remove-item="removeFromCart($event)"
        class="product-container" />
      <h3 id="total-price">Total: Rp{{ totalPrice }}</h3>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import CartItem from '../../components/CartItem.vue'

export default {
  data: function () {
    return {
      cartItems: []
    }
  },
  methods: {
    async removeFromCart(product) {
      await axios.delete(`http://localhost:8000/api/orders/user/1/product/${product}`);
      let indexCart = this.cartItems.map(item => item.code).indexOf(product);
      return this.cartItems.splice(indexCart, 1);
    }
  },
  computed: {
    totalPrice: function () {
      return this.cartItems.reduce((sum, item) => {
        return sum + Number(item.price);
      }, 0);
    }
  },
  async created() {
    // cara ke-1
    let result = await axios.get('http://localhost:8000/api/orders/user/1');
    let data = Object.assign({},
      ...(result.data.map(res => ({ cart_items: res.products }))))
    this.cartItems = data.cart_items;

    // cara ke-2
    // const [object] = result.data;
    // this.cartItems = object.products;
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