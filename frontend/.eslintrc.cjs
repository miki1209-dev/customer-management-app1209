/* eslint config for Vue3 + JS */
module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier', // ← Prettierと衝突しないようにする
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'vue/multi-word-component-names': 'off', // 学習用に緩める
  },
};