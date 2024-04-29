<template>
  <div>

    <div v-if="product" id="page-wrap">
      <div id="img-wrap">
        <img :src="product.imageUrl" :alt="product.name">
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p>Average rating {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>
    
    <not-found v-else/>

  </div>
</template>

<script>
import { products } from '../../data-seed.js';
import NotFound from '../errors/404.vue';

export default {
  data: function () {
    return {
      products
    }
  },
  computed: {
    product: function () {
      return this.products.find(p => p.id === this.$route.params.id);
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