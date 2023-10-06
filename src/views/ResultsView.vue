<template>
  <div>
    <h1>Résultats pour la catégorie {{ categoryName }}</h1>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
        {{ cocktail.strDrink }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getCocktailByCategory } from "@/services/ApiCocktailDB.js";

export default {
  props: {
    categoryName: String,
  },
  data() {
    return {
      cocktails: [],
    };
  },
  mounted() {
    this.fetchCocktailsByCategory();
  },
  methods: {
    async fetchCocktailsByCategory() {
      try {
        const response = await getCocktailByCategory(this.categoryName);
        const data = await response.json();

        if (data && data.drinks) {
          this.cocktails = data.drinks;
        } else {
          console.log("Aucun cocktail trouvé pour cette catégorie.");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    },
  },
};
</script>
