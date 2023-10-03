import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import CocktailViews from "../views/CocktailViews.vue";
// import CocktailIngredientViews from "../views/CocktailIngredientViews.vue";

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
    props: true,
  },
  // {
  //   path: "/cocktail/:ingredient",
  //   name: "cocktailIngredient",
  //   component: CocktailIngredientViews,
  // },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
