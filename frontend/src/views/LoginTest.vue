<template>
  <div class="container py-5" style="max-width: 440px">
    <h2 class="mb-3">Login Test</h2>

    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="email" class="form-control" type="email" placeholder="test@example.com" />
      <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
    </div>

    <div class="mb-3">
      <label class="form-label">Password</label>
      <input v-model="password" class="form-control" type="password" placeholder="password" />
      <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
    </div>

    <div class="d-flex gap-2">
      <button class="btn btn-primary" @click="handleLogin">Login</button>
      <button class="btn btn-outline-secondary" @click="handleMe">/api/user</button>
      <button class="btn btn-outline-danger" @click="handleLogout">Logout</button>
      <RouterLink class="btn btn-outline-secondary" to="/app">ダッシュボード</RouterLink>
    </div>

    <pre class="mt-4 bg-light p-3 border rounded" style="min-height: 120px">{{ message }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { login, getUser, logout } from '../api/auth';
import { normalizeError } from '../api/errors';

const email = ref('');
const password = ref('');
const message = ref('Ready.');
const errors = ref({});

const handleLogin = async () => {
  message.value = 'Logging in...';
  errors.value = {};
  try {
    const res = await login(email.value, password.value);
    message.value = `Login: ${res.status}`;
  } catch (e) {
    const r = normalizeError(e);
    message.value = `Login Error: ${r.status} ${r.message}`;
    errors.value = r.fieldErrors || {};
  }
};

const handleMe = async () => {
  message.value = 'Fetching /api/user...';
  try {
    const res = await getUser();
    message.value = JSON.stringify(res.data, null, 2);
  } catch (e) {
    const r = normalizeError(e);
    message.value = `Me Error: ${r.status} ${r.message}`;
  }
};

const handleLogout = async () => {
  message.value = 'Logging out...';
  try {
    const res = await logout();
    message.value = `Logout: ${res.status}`;
  } catch (e) {
    const r = normalizeError(e);
    message.value = `Logout Error: ${r.status} ${r.message}`;
  }
};
</script>
