<template>
    <div>
        <img :src="`http://localhost:8000${item.imageUrl}`" :alt="item.name" class="product-image">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <p>
                Rp{{ item.price }}
            </p>
        </div>
        <button class="remove-button" @click="$emit('remove-item', item.code)">Remove</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    props: ['item']
}
</script>

<style scoped>
.product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
}

.details-wrap {
    padding: 0 16px;
    flex: 3;
}

.remove-button {
    flex: 1;
    margin: auto;
}
</style>