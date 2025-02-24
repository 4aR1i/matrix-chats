import { useAuthStore } from '@/store';
export const useRouteAuthGuard = (router) => {
    router.beforeEach(async (to, _, next) => {
        const authStore = useAuthStore();
        authStore.checkAuthStatus();
        if (authStore.isAuthenticated || to.path === '/auth')
            next();
        else
            next('/auth');
    });
};
