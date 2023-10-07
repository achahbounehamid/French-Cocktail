<template>
  <div class="drinks" v-if="cocktail">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    <h3>{{ cocktail.strDrink }}</h3>
  </div>
  <p class="instructions">Instructions: {{ cocktail.strInstructions }}</p>
  <strong><span class="ingredient">Ingredients</span></strong>
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
  width: 250px;
  height: 250px;
  border-radius: 10px;
}

h3 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0;
}

.instructions {
  color: black;
  font-size: 25px;
  font-family: garamond;
  font-weight: 300;
}

span {
  color: rgb(10, 10, 10);
  text-transform: uppercase;
  font-family: futura_black;
  font-size: 30px;
}

.ingredients {
  text-transform: uppercase;
  font-size: 20px;
  line-height: inherit;
  color: black;
}

ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0 30px 0;
}
</style>
