// 役割：認証に関する“窓口関数”たち（＝画面からはここだけ呼ぶ）
// 依存：共通クライアント（api）と CSRF取得ヘルパ（ensureCsrf）
import { api, ensureCsrf } from "./clients";

// ① ログイン
export async function login(email, password) {
  await ensureCsrf(); // ← セッションIDとXSRFトークンを取得する
  return api.post('/login', { email, password });
}

// ② 現在ログイン中のユーザー取得
export function getUser() {
  return api.get('/user');
}

// ③ ログアウト
export function logout() {
  return api.post('/logout');
}