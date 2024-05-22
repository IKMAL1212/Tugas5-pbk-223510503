import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Keranjang from '../views/Keranjang.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/keranjang', name: 'Keranjang', component: Keranjang }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
