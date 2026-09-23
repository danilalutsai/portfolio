import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/MainPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import TechsPage from '@/pages/TechsPage.vue';
import ContactPage from '@/pages/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/techs', name: 'techs', component: TechsPage },
    { path: '/contact', name: 'contact', component: ContactPage },
  ],
  linkActiveClass: 'text-green-500 opacity-100 font-bold',
})

export default router;
