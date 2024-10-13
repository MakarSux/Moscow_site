import { createRouter, createWebHistory } from "vue-router";

import General from '@/views/general.vue';
import Feedback from "@/views/Feedback.vue";
import Excursions from "@/views/Excursions.vue";
import Videos from "@/views/Videos.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: General,
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: Feedback,
        },
        {
            path: '/excursions',
            name: 'excursions',
            component: Excursions,
        },
        {
            path: '/videos',
            name: 'videos',
            component: Videos,
        },
    ]
})


export default router