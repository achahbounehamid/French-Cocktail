import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "@/views/HomePage.vue";
import CocktailViews from "@/views/CocktailViews.vue";
import CocktailListIngredients from "@/views/CocktailListIngredients.vue";
import CocktailCategoryViews from "@/views/CocktailCategoryViews.vue";
import CategoryDetails from "@/components/CategoryDetails.vue";
import ResultsView from "@/views/ResultsView.vue";

import CocktailByIngredient from "@/components/CocktailByIngredient.vue";
import CocktailResults from "@/views/CocktailResults.vue";

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
  {
    path: "/ingredient/",
    name: "cocktailListIngredient",
    component: CocktailListIngredients,
    props: true,
  },

  {
    path: "/ingredients/:ingredientName",
    name: "IngredientsByName",
    component: CocktailByIngredient,
  },
  {
    path: "/cocktail-results/:ingredient",
    name: "CocktailResults",
    component: CocktailResults,
  },
  {
    path: "/category/",
    name: "cocktailCategory",
    component: CocktailCategoryViews,
  },
  {
    path: "/categoryName",
    name: "categoryDetails",
    component: CategoryDetails,
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
    props: true,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
