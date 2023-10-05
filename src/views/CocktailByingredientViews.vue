<template>
  <section id="CocktailByIngredient">
    <h1>{{ strIngredient1 }}</h1>
    <div id="containerOneIngredient" class="row-limit-size">
      <ListCocktail
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        :name="cocktail.strDrink"
        :img="cocktail.strDrinkThumb"
        :id="cocktail.idDrink"
        :strIngredient1="cocktail.strIngredient1"
        @click="showCocktailDetails(cocktail.idDrink)"
      />
    </div>
  </section>
</template>
<script>
import listCocktail from "@/components/CocktailByIngredient.vue";
import {
  getCocktailWithIngredient,
  getOneCocktailNonAlcool,
} from "@/services/ApiCocktailDB.js";
export default {
  name: "ingredientByCocktail",
  components: {
    listCocktail,
  },
  data() {
    return {
      cocktails: [],
      strIngredient1: this.$route.params.strIngredient1,
    };
  },
  mounted() {
    this.listCocktailSansAlcool();
  },
  methods: {
    async listCocktailSansAlcool() {
      const reponse = await getCocktailWithIngredient(this.strIngredient1);
      const data = await reponse.json();
      this.cocktails = data.drinks;
    },
    async showCocktailDetails(idDrink) {
      const response = await getOneCocktailNonAlcool(idDrink);
      const data = await response.json();
      // Traitez les données du cocktail détaillé ici
      console.log(data);
    },
  },
};
</script>
