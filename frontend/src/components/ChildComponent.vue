<template>
  <p>こんにちは、{{ name }}さん</p>
  <button @click="emitHello"></button>
</template>

<script setup>
const props = defineProps({
  name: String,
});

const emit = defineEmits(['say-hello']);

const emitHello = () => {
  emit('say-hello', `こんにちわ${props.name}さん！`);
};
</script>
