// 画面で扱いやすい形にそろえる（実務ミニ版）
export function normalizeError(e) {
  const res = e?.response;
  const status = res?.status ?? 0;
  const data = res?.data ?? {};

  // ステータスごとのフォールバック文言（必要に応じて調整）
  const fallback = {
    401: 'Unauthenticated.',
    403: 'Forbidden.',
    404: 'Not found.',
    419: 'CSRF token mismatch or expired.',
    422: 'Validation failed.',
    429: 'Too many requests.',
    500: 'Server error.',
  };

  const message =
    (typeof data?.message === 'string' && data.message.trim()) ||
    (status ? fallback[status] || 'Request failed.' : 'Network error.');

  // 422 の field errors を「先頭だけ」取り出して使いやすく
  const rawErrors = data?.errors || null;
  const fieldErrors = rawErrors
    ? Object.fromEntries(
        Object.entries(rawErrors).map(([k, v]) => [k, Array.isArray(v) ? String(v[0]) : String(v)])
      )
    : null;

  return { ok: false, status, message, fieldErrors, raw: e };
}