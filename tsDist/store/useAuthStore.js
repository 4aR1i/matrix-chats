import { ref } from 'vue';
import { defineStore } from 'pinia';
import { createMatrixClient, login } from '@/services';
export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const errorMessage = ref('');
    async function authenticate(homeserver, username, password) {
        try {
            createMatrixClient(homeserver);
            const response = await login(username, password);
            const { access_token, user_id } = response;
            localStorage.setItem('matrix_homeserver', homeserver);
            localStorage.setItem('matrix_access_token', access_token);
            localStorage.setItem('matrix_user_id', user_id);
            isAuthenticated.value = true;
            return true;
        }
        catch {
            errorMessage.value = 'Ошибка авторизации';
            isAuthenticated.value = false;
        }
    }
    function checkAuthStatus() {
        const token = localStorage.getItem('matrix_access_token');
        const homeserver = localStorage.getItem('matrix_homeserver');
        isAuthenticated.value = !!(token && homeserver);
    }
    function clearError() {
        errorMessage.value = '';
    }
    return { isAuthenticated, errorMessage, authenticate, checkAuthStatus, clearError };
});
