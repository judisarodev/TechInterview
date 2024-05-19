import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Data from "../views/Data.vue";

Vue.use(VueRouter);

// Defina routes for the web site
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/data",
    name: "Data",
    component: Data,
  },

  {
    path: "/about",
    name: "About",
    component: About
  }

];

// Congigures router
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
