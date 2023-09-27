<template>
  <div>
    <input
      v-model="searchTerm"
      placeholder="Rechercher des cocktails commençant par A"
    />
    <button @click="searchCocktails">Rechercher</button>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
        {{ cocktail.strDrink }}
      </li>
    </ul>
  </div>
</template>
<script>
import { searchCocktailsApi } from "@/services/ApiCocktailDB.js";
export default {
  name: "BrowseCocktailsA",
  data() {
    return {
      searchTerm: "",
      cocktails: [],
    };
  },
  methods: {
    async performSearch() {
      try {
        const response = await searchCocktailsApi(this.searchTerm); // Call the imported function
        const data = await response.json();
        this.cocktails = data.drinks || [];
      } catch (error) {
        console.error("Erreur lors de la recherche de cocktails :", error);
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
