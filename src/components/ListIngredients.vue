<template>
  <div class="list">
    <h1>Liste des Cocktails par Ingrédient</h1>
    <ul>
      <li
        v-for="Ingredient in Ingredients"
        :key="Ingredient.strIngredient2"
        @click="fetchCocktailsByIngredient(Ingredient.strIngredient2)"
      >
        {{ listIngredient.strIngredient2 }}
      </li>
    </ul>
    <!-- Sélection de l'ingrédient -->
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
import searchCocktailsByIngredient from "@/services/ApiCocktailDB.js"; // Assurez-vous d'importer la fonction appropriée

export default {
  name: "cocktailListIngredient",
  data() {
    return {
      // listIngredients: [], // Liste des ingrédients
      selectedIngredient: "", // Ingrédient sélectionné
      cocktails: [], // Liste des cocktails par ingrédient
    };
  },
  created() {
    this.fetchListIngredients();
  },
  methods: {
    async fetchListIngredients() {
      try {
        // Remplacez cet appel par votre propre fonction pour obtenir la liste des ingrédients
        const response = await searchCocktailsByIngredient();
        this.listIngredients = response.data.drinks;
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des ingrédients :",
          error
        );
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
