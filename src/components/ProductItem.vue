<template>
    <div>
        <img :src="`http://localhost:8000${product.imageUrl}`" :alt="product.name">
        <h3 class="product-name">{{ product.name }}</h3>
        <p>Rp{{ product.price }}</p>
        <router-link :to="{ name: 'detail', params: { id: product.code } }">
            <button>Detail</button>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['product'],
}
</script>

<style scoped>
.product-name {
    margin-bottom: 0;
}

img {
    height: 200px;
    width: 200px;
    border-radius: 5%;
}

a {
    width: 100%;
}

button {
    width: 100%;
}
</style>