<template>
  <div>
    <h2>タスク一覧</h2>
    <ul>
      <li v-for="task in allTasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
// ストアのインスタンスを取得
const store = useStore();

// タスク一覧を取得（getter）
const allTasks = computed(() => store.getters['task/allTasks']);

// 初回マウント時にfetchTasks()を実行してAPIから取得
onMounted(() => {
  store.dispatch('task/fetchTasks');
});
</script>
