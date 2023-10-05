<template>
  <div>
    <h1>Liste des Cocktails par Ingrédient</h1>
    <ul>
      <li
        v-for="listIngredient in listIngredients"
        :key="listIngredient.strIngredient2"
        @click="fetchCocktailsByIngredient(listIngredient.strIngredient2)"
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
  fetchCocktailsByIngredient, // Mise à jour de l'import
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
      // Mise à jour du nom de la méthode
      try {
        const response = await fetchCocktailsByIngredient(ingredient); // Utilisation du nom d'ingrédient
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
  },
  mounted() {
    this.fetchIngredients();
  },
};
</script>
<style scoped lang="scss">
div ul li {
  list-style-type: none;
}
</style>
<!-- <template>
  <section id="ingredient" class="row-limit-size">
    <h1>Search by ingredients</h1>
    <div id="ContainerAllIngredient">
      <div v-for="ingredient in ingredients" :key="ingredient.strIngredient1">
        <div class="containerOneIngredient">
          <router-link
            :to="{
              name: 'CocktailByIngredient',
              params: { strIngredient1: ingredient.strIngredient1 },
            }"
            >{{ ingredient.strIngredient1 }}</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { getCocktailById, getIngredient } from "@/services/ApiCocktailDB.js";

export default {
  name: "IngredientList",
  data() {
    return {
      ingredients: [],
    };
  },

  mounted() {
    this.listIngredient();
  },
  methods: {
    async listIngredient() {
      const response = await getIngredient();
      const data = await response.json();
      this.ingredients = data.drinks;
    },

    async showCocktailDetails(idDrink) {
      const response = await getCocktailById(idDrink);
      const data = await response.json();
      // Traitez les données du cocktail détaillé ici
      console.log(data);
    },
  },
};
</script> -->
