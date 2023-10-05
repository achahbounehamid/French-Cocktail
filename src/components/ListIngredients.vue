<template>
  <div class="list">
    <h1>Liste des Cocktails par Ingrédient</h1>
    <ul>
      <li
        v-for="ingredient in listIngredients"
        :key="ingredient.strIngredient"
        @click="fetchCocktailsByIngredient(ingredient.strIngredient2)"
      >
        {{ ingredient.strIngredient }}
      </li>
    </ul>
    <div v-if="selectedIngredient">
      <h2>Cocktails contenant {{ selectedIngredient }}</h2>
      <ul>
        <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
          {{ cocktail.strDrink }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchCocktailsByIngredient } from "@/services/ApiCocktailDB.js";

export default {
  name: "CocktailListIngredients",
  data() {
    return {
      listIngredients: [],
      selectedIngredient: "",
      cocktails: [],
    };
  },
  created() {
    this.fetchListIngredients();
  },
  methods: {
    async fetchListIngredients() {
      try {
        const response = await getIngredient();
        this.listIngredients = response.data.drinks;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des ingrédients :",
          error
        );
      }
    },
    async fetchCocktailsByIngredient(ingredient) {
      this.selectedIngredient = ingredient;
      try {
        const response = await fetchCocktailsByIngredient(ingredient);
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    },
  },
};
</script>

<style lang="scss">
.list {
  height: 100vh;
}
</style>
