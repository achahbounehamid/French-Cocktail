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
import { fetchCocktailsByIngredient } from "@/services/ApiCocktailDB.js";

export default {
  name: "CocktailResults",
  data() {
    return {
      ingredient: "",
      cocktails: [],
    };
  },
  methods: {
    async fetchCocktailsByIngredient() {
      try {
        const response = await fetchCocktailsByIngredient(this.ingredient);
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    },
  },
  mounted() {
    this.ingredient = this.$route.params.ingredient;
    this.fetchCocktailsByIngredient();
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.8rem;
  font-style: italic;
  text-align: center;
  margin-bottom: 40px;
  color: #31e0a9;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

div ul li {
  list-style-type: none;
}

ul li img {
  width: 250px;
  height: 250px;
  border-radius: 10px;
  transition: transform 0.1s;
}

ul li img:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 550px) {
  ul {
    display: flex;
    justify-content: center;
  }

  ul li img {
    width: 239px;
    height: 205px;
    border-radius: 10px;
    transition: transform 0.1s;
  }

  ul li img:hover {
    transform: scale(1.1);
  }
}
</style>
