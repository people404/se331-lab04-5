import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetWorkErrorView from "@/views/NetworkErrorView.vue";
import PassengerDetailView from "@/views/passenger/PassengerDetailView.vue";
import PassengerLayout from "@/views/passenger/PassengerLayout.vue";
import AirlineView from "@/views/passenger/AirlineView.vue";
import ResourceNotFound from "@/views/ResourceNotFound.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      limit: parseInt(route.query.limit) || 2,
    }),
  },
  {
    path: "/passenger/:id",
    name: "PassengerLayout",
    component: PassengerLayout,
    children: [
      {
        path: "",
        name: "PassengerDetail",
        props: true,
        component: PassengerDetailView,
      },
      {
        path: "airline",
        name: "Airline",
        props: true,
        component: AirlineView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/network-error",
    name: "NetWorkErrorView",
    component: NetWorkErrorView,
  },
  {
    path: "/NotF",
    name: "ResourceNotFound",
    component: ResourceNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
