import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/LoginTest.vue'; // まずは既存のテスト画面を使い回す
import Dashboard from '../views/Dashboard.vue';
import { getUser } from '../api/auth'; // ← 追加（/api/user で認証判定に使う）

// シンプルな認証チェック：/api/user が 200 ならログイン中
async function checkAuth() {
  try {
    const res = await getUser();          // Cookie + XSRF は api クライアントが自動で付与
    return !!res?.data?.id;               // { id, name, email, ... } を受け取れたら true
  } catch {
    return false;                         // 401 等は未ログイン扱い
  }
}

const router = createRouter({
  history: createWebHistory(), // URLが /login のようにキレイになる（#なし）
  routes: [
    { path: '/login', name: 'login', component: Login, meta: {guestOnly: true} },
    { path: '/app', name: 'app', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/', redirect: '/login' },
    { path: '/:pathMatch(.*)*', redirect: '/login' }, // 未定義URLは /login へ
  ],
});

// グローバルガード：遷移のたびに実行
router.beforeEach(async (to) => {
  // 1) 認証必須ページ → 未ログインなら /login へ（戻り先を ?redirect= に保存）
  if (to.meta.requiresAuth) {
    const ok = await checkAuth();
    if (!ok) return { name: 'login', query: { redirect: to.fullPath } };
  }
  // 2) ゲスト専用（/login） → ログイン済みなら /app へ
  if (to.meta.guestOnly) {
    const ok = await checkAuth();
    if (ok) return { name: 'app' };
  }
  return true; // 3) どちらでもなければ通す
});

export default router;