import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';
import RosterView from '@/views/RosterView.vue';
import ScheduleView from '@/views/ScheduleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/roster",
      name: "roster",
      component: RosterView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
  ],
});

export default router
