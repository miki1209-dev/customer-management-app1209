<template>
  <h2>カウントアプリ</h2>
  <div>
    <p>元の値：{{ count }}</p>
    <p>2倍の値：{{ doubleCount }}</p>
    <p>私の名前は{{ user.name }}です</p>
    <p>年齢は{{ user.age }}です</p>
  </div>
  <button @click="double">2倍にする</button>
  <br />
  <hr />
  <br />
  <div>
    <h2>Props emitの勉強</h2>
    <ParentComponent />
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import ParentComponent from './components/ParentComponent.vue';

const count = ref(0);
const user = reactive({
  name: 'みき',
  age: 27,
});

// ✅ これは表示専用（計算結果を「使う」ため）
const doubleCount = computed(() => count.value * 2);

// ✅ これはボタンで実行される処理（データを「更新」するため）
const double = () => {
  count.value *= 2;
  user.age *= 2;
};
</script>
