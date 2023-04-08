import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "../views/Projects.vue";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,

  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
