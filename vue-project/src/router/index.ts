import { createRouter,createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const history = createWebHistory();
const routes = [

    {
        path:'/Hello',
        component:()=>import ('@/pages/Hello/index.vue'),
    },

    {
        path:'/About',
        component:()=>import ('@/pages/About/index.vue'),
    },

    {
        path:'/Blog',
        component:()=>import ('@/pages/Blog/index.vue'),
    },

    {
        path:'/Now',
        component:()=>import ('@/pages/Now/index.vue'),
    },

    {
        path:'/Books',
        component:()=>import ('@/pages/Books/index.vue'),
    },

    {
        path:'/Writing',
        component:()=>import ('@/pages/Writing/index.vue'),
    },

    {
        path:'/Projects',
        component:()=>import ('@/pages/Projects/index.vue'),
    },

    {
        path:'/Contactme',
        component:()=>import ('@/pages/Contactme/index.vue'),
    },

    {
        path:'/Writing/2025/3',
        component: ()=>import ('@/pages/Writing/content/2025/2025-3.vue'),
    },

    {
        path:'/Writing/2025/4',
        component:()=>import ('@/pages/Writing/content/2025/2025-4.vue'),
    },

    {
        path:'/Writing/2025/5',
        component:()=>import ('@/pages/Writing/content/2025/2025-5.vue'),
        
    },

    {
        path:'/Writing/2025/6',
        component:()=>import ('@/pages/Writing/content/2025/2025-6.vue'),
    },

    {
        path:'/Writing/2025/7',
        component:()=>import ('@/pages/Writing/content/2025/2025-7.vue'),
    },

    {
        path:'/Writing/2025/8',
        component:()=>import ('@/pages/Writing/content/2025/2025-8.vue'),
    },

    {
        path:'/Writing/2025/9',
        component:()=>import ('@/pages/Writing/content/2025/2025-9.vue'),
    },

    {
        path:'/Writing/2025/10',
        component:()=>import ('@/pages/Writing/content/2025/2025-10.vue'),
    },

    {
        path:'/Writing/2025/11',
        component:()=>import ('@/pages/Writing/content/2025/2025-11.vue'),
    },

    {
        path:'/Writing/2025/12',
        component:()=>import ('@/pages/Writing/content/2025/2025-12.vue'),
    },
];

const router = createRouter(
    {
        history,
        routes,
    }
);

export default router;