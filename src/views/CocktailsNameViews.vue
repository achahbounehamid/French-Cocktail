<template>
  <div class="cocktailsName">
    <div v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
      {{ cocktail.strDrink }}
    </div>
    <h3>{{ cocktail.strDrink }}</h3>
  </div>
</template>
<script>
export default {
  name: "searchCocktailName",
  data() {
    return {
      //   searchTerm: "",
      cocktails: [],
    };
  },
};
</script>
