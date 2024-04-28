import Vue from 'vue'
import VueRouter from 'vue-router'

import Product from '../views/product/Product'
import Detail from '../views/product/DetailProduct'
import Cart from '../views/cart/Cart'
import NotFound from '../views/errors/404';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path : '*',
    component : NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router