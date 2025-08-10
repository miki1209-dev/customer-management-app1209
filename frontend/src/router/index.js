import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginTest.vue'; // まずは既存のテスト画面を使い回す
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(), // URLが /login のようにキレイになる（#なし）
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/app', name: 'app', component: Dashboard },
    { path: '/', redirect: '/login' },
    { path: '/:pathMatch(.*)*', redirect: '/login' }, // 未定義URLは /login へ
  ],
});

export default router;