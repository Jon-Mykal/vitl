import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      // redirect: "https://virginsintltrading.fygaroshops.com",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("../views/Test.vue")
    },
    {
      path: "/contact-us",
      name: "contact",
      // redirect: "https://virginsintltrading.fygaroshops.com",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactUsView.vue"),
    },
  ],
});

export default router;
