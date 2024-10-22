import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue';
import RosterView from '@/views/RosterView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import LoginView from '@/views/LoginView.vue';
import IndividualPlayerView from '@/views/IndividualPlayerView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import ARCspeechView from '@/views/ARCspeechView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
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
    {
      path: "/player/:id",
      name: "IndividualPlayer",
      component: IndividualPlayerView,
    },
    {
      path: "/register",
      name: "register",
      component: RegistrationView,
    },
    {
      path: "/ARCspeech",
      name: "ARCspeech",
      component: ARCspeechView,
    },

    // ARCspeechView,
  ],
});

export default router
