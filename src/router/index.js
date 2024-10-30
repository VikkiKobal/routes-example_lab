import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import SecretPage from '@/views/SecretPage.vue';
import SumComponent from '@/views/SumComponent.vue';

const routes = [
    {
        path: '/sum/:numbers(.*)',
        name: 'Sum',
        component: SumComponent,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/secret',
        name: 'Secret',
        component: SecretPage,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
