<template>
  <div>
    <ul>
      <li v-for="category in categories" :key="category">
        <a href="#" @click="getCategory(category)">{{ category }}</a>
      </li>
    </ul>
    <div v-if="selectedCocktail">
      <h2>{{ selectedCocktail.name }}</h2>
      <img :src="selectedCocktail.image" alt="Cocktail Image" />
      <p>{{ selectedCocktail.instructions }}</p>
    </div>
  </div>
</template>

<script>
import { getCategory } from "@/services/ApiCocktailDB.js";

export default {
  name: "CocktailCategory",
  data() {
    return {
      categories: [],
      selectedCocktail: null,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      getCategory()
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.drinks.map((drink) => drink.strCategory);
        })
        .catch((error) => {
          console.error("Une erreur s'est produite :", error);
        });
    },
    getCategory() {
      getCategory()
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks && data.drinks.length > 0) {
            const cocktail = data.drinks[0]; // Sélectionnez le premier cocktail de la liste
            this.selectedCocktail = {
              name: cocktail.idDrink,
              image: cocktail.strDrinkThumb,
              instructions: cocktail.strInstructions,
            };
          } else {
            this.selectedCocktail = null; // Aucun cocktail trouvé
          }
        })
        .catch((error) => {
          console.error("Une erreur s'est produite :", error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
div ul li {
  list-style-type: none;
}
</style>
