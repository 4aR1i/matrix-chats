<template>
  <section class="auth">
    <h1 class="auth__title">Вход</h1>
    <div class="auth__controls">
      <input
        v-model="homeserver"
        type="text"
        placeholder="Логин"
        class="auth__input"
        @focus="authStore.clearError" />
      <input
        v-model="username"
        type="text"
        placeholder="Логин"
        class="auth__input"
        @focus="authStore.clearError" />
      <input
        v-model="password"
        type="password"
        placeholder="Пароль"
        class="auth__input"
        @focus="authStore.clearError" />
    </div>
    <p v-if="error" class="auth__error">{{ error }}</p>
    <button class="auth__btn" :disabled="isLoading" @click="handleLogin">Войти</button>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '@/store';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const isLoading = ref(false);
const homeserver = ref('https://matrix-client.matrix.org');
const username = ref('');
const password = ref('');

const error = computed(() => authStore.errorMessage);

async function handleLogin() {
  try {
    isLoading.value = true;
    await authStore.authenticate(homeserver.value, username.value, password.value);
    router.push('/');
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 600;
    font-size: 30px;
    color: #8b302d;
    margin-bottom: 20px;
  }

  &__controls {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  &__input {
    background-color: #ffffff;
    border-radius: 10px;
    color: #8b302d;
    outline: none;
    border: none;
    padding: 10px;
    width: 100%;
    max-width: 250px;
    font-size: 16px;
  }

  &__input::placeholder {
    color: #8b302d;
  }

  &__btn {
    background-color: #8b302d;
    border-radius: 10px;
    color: #ffffff;
    padding: 10px;
    width: 100%;
    max-width: 250px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;

    &:active {
      background-color: #64211e;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__error {
    color: #8b302d;
  }
}
</style>
