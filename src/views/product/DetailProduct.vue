<template>
  <div>

    <div v-if="product" id="page-wrap">
      <h4 class="notif" v-if="notif">Item added successfully</h4>
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" :alt="product.name">
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p>Average rating {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">Add to cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <not-found v-else />

  </div>
</template>

<script>

import axios from 'axios';
import NotFound from '../errors/404.vue';

export default {
  data: function () {
    return {
      product: {},
      notif : false
    }
  },
  async created() {
    const code = this.$route.params.id;
    const result = await axios.get(`http://localhost:8000/api/products/${code}`);
    this.product = result.data;
  },
  methods: {
    async addToCart(product) {
      await axios.post('http://localhost:8000/api/orders/user/1/add', {
        product: product
      })
      this.notif = true
    }
  },
  components: {
    NotFound
  }
}
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

.notif {
  text-align: center;
  color: white;
  background-color: #41B883;
  padding: 3%;
  border-radius: 13px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>