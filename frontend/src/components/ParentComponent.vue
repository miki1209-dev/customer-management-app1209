<template>
  <div>
    <h3>親コンポーネント</h3>
    <ChildComponent :name="userName" @say-hello="handleHello" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const userName = ref('みき');
const handleHello = (message) => {
  alert(`子から届いたメッセージ${message}`);
};
</script>
