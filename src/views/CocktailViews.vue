<template>
  <div class="drinks">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    <h3>{{ cocktail.strDrink }}</h3>
  </div>
</template>
<script>
import { getOneCocktailNonAlcool } from "@/services/ApiCocktailDB.js";
export default {
  name: "CocktailViews",
  components: {},
  data() {
    return {
      cocktail: {},
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
};
</script>
<style scoped lang="scss">
.drinks img {
  width: 200px;
  height: 200px;
}
</style>
