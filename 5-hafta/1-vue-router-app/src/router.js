import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: () => import('@/views/HomeComponent'),
    },

    {
        name: 'NewBookmark',
        path: '/new',
        component: () => import('@/views/NewBookmarkComponent'),
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
