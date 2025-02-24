import { createRouter, createWebHashHistory } from 'vue-router';
import { AuthForm, UserRooms } from '@/components';

const routes = [
  {
    name: 'Rooms',
    path: '/',
    component: UserRooms,
  },
  {
    name: 'Auth',
    path: '/auth',
    component: AuthForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
