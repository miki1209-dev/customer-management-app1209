<template>
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="card-title">Auth Store Debug Panel</h5>
      <div class="mb-2">
        <b>user:</b> <code>{{ user }}</code>
      </div>
      <div class="mb-2">
        <b>loading:</b> <code>{{ loading }}</code>
      </div>
      <div class="mb-2">
        <b>initialized:</b> <code>{{ initialized }}</code>
      </div>

      <div class="d-flex gap-2 mt-3">
        <button class="btn btn-sm btn-primary" @click="loginFake">setUser(仮)</button>
        <button class="btn btn-sm btn-warning" @click="toggleLoading">toggle loading</button>
        <button class="btn btn-sm btn-success" @click="initTrue">initialized = true</button>
        <button class="btn btn-sm btn-outline-danger" @click="clearAll">clear()</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex/dist/vuex.cjs.js';

const store = useStore();
</script>
