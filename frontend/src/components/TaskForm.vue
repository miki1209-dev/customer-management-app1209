<template>
  <form @submit.prevent="handleSubmit">
    <label>タスク名</label>
    <input type="text" v-model="title" placeholder="タスクを入力" />
    <button type="submit">追加</button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
// タスクのタイトル入力欄
const title = ref('');

// Vuexストアを取得
const store = useStore();

// 送信ボタン押下時の処理
const handleSubmit = async () => {
  if (!title.value.trim()) return;

  // Vuexのactionを呼び出す（引数はAPI用のデータ）
  await store.dispatch('task/createTask', {
    title: title.value,
    done: false,
  });

  title.value = '';
};
</script>
