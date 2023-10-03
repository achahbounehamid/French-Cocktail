<template>
  <div class="drinks" v-if="cocktail">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    <h3>{{ cocktail.strDrink }}</h3>
  </div>
  <p class="instructions">Instructions: {{ cocktail.strInstructions }}</p>
  <span class="ingredient">Ingredients</span>
  <ul>
    <li class="ingredients" v-for="ingredient in ingredients" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>
</template>
<script>
import { getOneCocktailNonAlcool } from "@/services/ApiCocktailDB.js";

export default {
  name: "CocktailViews",
  components: {},
  data() {
    return {
      cocktail: {},
      //aj
      idDrink: this.$route.params.idDrink, //recuper id dans l'url
    };
  },

  mounted() {
    this.oneCocktail(this.idDrink);
  },
  methods: {
    async oneCocktail(idDrink) {
      const responses = await getOneCocktailNonAlcool(idDrink);
      const datas = await responses.json();
      this.cocktail = datas.drinks[0];
    },
  },
  computed: {
    ingredients() {
      const ingredients = [];
      for (let i = 1; i <= 10; i++) {
        const ingredient = this.cocktail[`strIngredient${i}`];
        const measure = this.cocktail[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
          ingredients.push(`${ingredient} - ${measure}`);
        }
      }
      return ingredients;
    },
  },
};
</script>
<style scoped lang="scss">
.drinks img {
  width: 200px;
  height: 200px;
}

ul {
  list-style-type: none;
}
</style>
