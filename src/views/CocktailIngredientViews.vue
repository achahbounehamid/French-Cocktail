<template>
  <div>
    <h1>Cocktails avec {{ ingredient }}</h1>
    <ul>
      <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <img
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
          width="100"
          height="100"
        />
        <h2>{{ cocktail.strDrink }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
import fetchCocktailsByIngredient from "@/services/ApiCocktailDB.js";
export default {
  name: "cocktailIngredient",
  data() {
    return {
      ingredient: "", // L'ingrédient que vous souhaitez rechercher
      cocktails: [], // Pour stocker les cocktails trouvés
      ingredient: this.$route.params.ingredient,
    };
  },
  methods: {
    async fetchCocktailsByIngredient() {
      try {
        const response = await fetchCocktailsByIngredient(this.ingredient);
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails:", error);
      }
    },
  },
  mounted() {
    this.fetchCocktailsByIngredient();
  },
};
</script>
