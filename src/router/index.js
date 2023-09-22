import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomPage from "../views/public/HomePage.vue";
import CocktailPage from "../views/public/CocktailPage.vue";
import ContactPage from "../views/public/ContactPage.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomPage,
  },
  {
    path: "/cocktail",
    name: "cocktail",
    component: CocktailPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
