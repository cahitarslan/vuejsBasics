import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeCmp from '@/views/Home';

const routes = [
    {
        name: 'HomePage',
        path: '/',
        // component: HomeCmp,
        component: () => import('@/views/HomeComponent'),
    },
    {
        name: 'AboutPage',
        path: '/hakkimda',
        // component: HomeCmp,
        component: () => import('@/views/AboutComponent'),
    },
    {
        name: 'DetailPage',
        path: '/detay/:userID',
        // component: HomeCmp,
        component: () => import('@/views/DetailsComponent'),
    },
];

const router = createRouter({
    routes,
    // mode: 'hash|history', V2
    // history: createWebHistory(),
    history: createWebHashHistory(),
});

export default router;
