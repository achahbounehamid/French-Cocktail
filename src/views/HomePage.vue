<template>
  <div class="drinks">
    <CocktailNomAlcol
      v-for="cocktail in cocktails"
      :key="cocktail.id"
      :strDrink="cocktail.strDrink"
      :strDrinkThumb="cocktail.strDrinkThumb"
      :idDrink="cocktail.idDrink"
    />
  </div>
</template>
<script>
import CocktailNomAlcol from "@/components/CocktailNomAlcol.vue";
import { getListNonAlcool } from "@/services/ApiCocktailDB.js";

export default {
  name: "HomePage",
  components: { CocktailNomAlcol },
  data() {
    return {
      cocktails: [],
    };
  },
  methods: {
    async fetchCocktail() {
      try {
        const response = await getListNonAlcool();
        const data = await response.json();
        this.cocktails = data.drinks;
      } catch (error) {
        console.error("Une erreur s'est produite : ", error);
      }
    },
  },
  created() {
    this.fetchCocktail();
  },
};
</script>
<style scoped lang="scss">
.home {
  height: 650px;
}
p {
  color: green;
  font-size: 30px;
}
.drinks {
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
}
.slide-carousel {
  width: 100%;
  height: 500px;
}
</style>
