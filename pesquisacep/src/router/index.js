import { createRouter, createWebHistory } from "vue-router";
import tela from "../views/tela.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tela",
      component: tela,
    },
  ],
});

export default router;
