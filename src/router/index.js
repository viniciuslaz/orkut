import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/main/index.main.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.login.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: () => {
        return { path: "/login" };
      }
    }
  ]
});

export default router;
