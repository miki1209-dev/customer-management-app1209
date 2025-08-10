<template>
  <div class="container py-4">
    <h2 class="mb-3">Dashboard (仮)</h2>

    <p class="text-muted">
      ここは将来「ログイン済みユーザーだけ」入れる画面になる予定。
      今はガードなしなので誰でもアクセス可（次のステップで守る）。
    </p>

    <div class="d-flex gap-2 mt-3">
      <RouterLink class="btn btn-outline-secondary" to="/login">ログイン</RouterLink>
    </div>
  </div>
</template>

<script setup></script>
