import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import CocktailViews from "../views/CocktailViews.vue";
import CocktailsByName from "../views/CocktailsNameViews.vue";
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
    path: "/cocktailByName/:strDrink",
    name: "searchCocktailName",
    component: CocktailsByName,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
