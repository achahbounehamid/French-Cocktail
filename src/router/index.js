import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import CocktailViews from "../views/CocktailViews.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/cocktail/:idDrink",
    name: "cocktailDetails",
    component: CocktailViews,
  },
  {
    path: "/cocktailA/:idDrink",
    name: "browseCocktailsA",
    component: BrowseCocktails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
