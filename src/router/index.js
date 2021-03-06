import Home from "@/pages/home.vue";
import NotFound from "@/pages/not-found.vue";
import { authenticationGuard } from "@/services/authentication-guard";
import Callback from "@/components/callback";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../pages/profile.vue"),
    beforeEnter: authenticationGuard,
  },
  {
    path: "/external-api",
    name: "external-api",
    component: () =>
      import(
        /* webpackChunkName: "external-api" */ "../pages/external-api.vue"
      ),
    beforeEnter: authenticationGuard,
  },
  {
    path: "/callback",
    name: "callback",
    component: Callback,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
