<template>
  <div class="cocktail-card">
    <figure>
      <img :src="strDrinkThumb" alt="strDrink" />
    </figure>
    <h3>{{ strDrink }}</h3>
    <router-link :to="{ name: 'cocktailDetails', params: { idDrink: idDrink } }"
      >En Savoir Plus</router-link
    >
  </div>
</template>
<script>
export default {
  name: "CocktailNomAlcol",
  props: {
    strDrink: String,
    strDrinkThumb: String,
    idDrink: Number,
  },
};
</script>
<style scoped lang="scss">
.cocktail-card {
  figure img {
    width: 250px;
    height: 250px;
  }
}
</style>
