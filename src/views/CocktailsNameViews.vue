<template>
  <div class="cocktailsName">
    <div v-for="cocktailName in cocktailNames" :key="cocktailName.idDrink">
      <img :src="cocktailName.strDrinkThumb" :alt="cocktailName.strDrink" />
      {{ cocktailName.strDrink }}
    </div>
    <!-- <h3>{{ cocktail.strDrink }}</h3> -->
  </div>
</template>
<script>
import { searchCocktailsByName } from "@/services/ApiCocktailDB.js";
export default {
  name: "CocktailNameViews",
  // components: {
  //   cocktailDetails,
  // },
  data() {
    return {
      searchQuery: "",
      cocktailNames: [],
    };
  }, 
  methods: {
  async searchCocktailsNames() {
    try {
      const response = await searchCocktailsByName(this.searchQuery);
      this.cocktailNames = response.data.cocktails || [];
    } catch (error) {
      console.error("Erreur lors de la recherche de cocktails :", error);
    }
  },
},
};
</script>
