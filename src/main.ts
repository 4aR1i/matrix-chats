import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import App from '@/App.vue';
import { useRouteAuthGuard } from '@/router/useRoutAuthGuard';

import './styles/styles.scss';

const app = createApp(App);
const pinia = createPinia();

useRouteAuthGuard(router);

app.use(router).use(pinia).mount('#app');
