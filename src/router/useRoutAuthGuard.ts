import { useAuthStore } from '@/store';
import { Router } from 'vue-router';

export const useRouteAuthGuard = (router: Router) => {
  router.beforeEach(async (to, _, next) => {
    const authStore = useAuthStore();
    authStore.checkAuthStatus();

    if (authStore.isAuthenticated || to.path === '/auth') next();
    else next('/auth');
  });
};
