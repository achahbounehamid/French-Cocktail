import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomePage from "../views/HomePage.vue";
import CocktailViews from "../views/CocktailViews.vue";
import CocktailListIngredients from "../views/CocktailListIngredients.vue";
// import CocktailCategoryViews from "../views/c=CocktailCategoryViews.vue";

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
  //   {
  //     path: "/category/",
  //     name: "cocktailCategory",
  //     component: CocktailCategoryViews,

  //   },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
