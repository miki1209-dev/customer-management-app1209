import axios from "axios"

// // 共通クライアント（全リクエストで Cookie を同送）
// export const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   withCredentials: true,
//   withXSRFToken: true,
//   xsrfCookieName: 'XSRF-TOKEN',
//   xsrfHeaderName: 'X-XSRF-TOKEN',
//   headers: {
//     'X-Requested-With': 'XMLHttpRequest'
//   }
// })

// // /login の前に一度だけ叩くヘルパ：CSRF用クッキー(XSRF-TOKEN)を受け取る
// export async function ensureCsrf() {
//   await api.get('/sanctum/csrf-cookie');
// }

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});