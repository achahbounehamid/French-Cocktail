<template>
  <div>
    <h1>Liste des Cocktails par Ingrédient</h1>
    <ul>
      <li
        v-for="listIngredient in listIngredients"
        :key="listIngredient.strIngredient2"
        @click="navigateToCocktailResults(listIngredient.strIngredient2)"
      >
        {{ listIngredient.strIngredient2 }}
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
import {
  getIngredient,
  getIngredientByName, // Mise à jour de l'import
} from "@/services/ApiCocktailDB.js";

export default {
  data() {
    return {
      listIngredients: [],
      selectedIngredient: null,
      cocktails: [],
    };
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await getIngredient();
        const data = await response.json();

        if (data && data.drinks) {
          this.listIngredients = data.drinks.map((ingredient) => ({
            strIngredient2: ingredient.strIngredient1,
          }));
        } else {
          console.log("Aucun ingrédient trouvé.");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    },
    async fetchCocktailsByIngredient(ingredient) {
      try {
        const response = await getIngredientByName(ingredient); // Utilisation de la fonction getIngredientByName
        const data = await response.json();

        if (data && data.drinks) {
          this.cocktails = data.drinks;
          this.selectedIngredient = ingredient;
        } else {
          console.log("Aucun cocktail trouvé pour cet ingrédient.");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    },
    navigateToCocktailResults(ingredient) {
      // Utilisez la route nommée CocktailResults pour rediriger vers la page des résultats des cocktails
      this.$router.push({ name: "CocktailResults", params: { ingredient } });
    },
  },
  mounted() {
    this.fetchIngredients();
  },
};
</script>

<style scoped lang="scss">
div h1 {
  font-size: 1.8rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
  color: #31e0a9;
}

div ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 50px;
}

div ul li {
  list-style-type: none;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: Arial, sans-serif;
  color: #333;
  border-bottom: 1px solid #000;
  padding: 0 2px;
  cursor: pointer;
}

@media screen and (max-width: 1337px) {
  div h1 {
    font-size: 1.5rem;
  }

  div ul li {
    font-size: 18px;
  }
}
</style>
