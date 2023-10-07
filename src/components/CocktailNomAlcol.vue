<template>
  <div class="cocktail-card">
    <figure>
      <img :src="strDrinkThumb" alt="strDrink" />
    </figure>
    <router-link :to="`/cocktail/${Number(idDrink)}`">{{
      strDrink
    }}</router-link>
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
  figure {
    img {
      width: 250px;
      height: 250px;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.1s;
    }
  }

  &:hover {
    figure img {
      transform: scale(1.1);
    }
  }

  a {
    font-family: "Quicksand";
    color: #404e87;
    font-size: 25px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s; /* Ajout d'une transition pour la couleur de fond au survol */
  }

  a:hover {
    background-color: gold;
  }
}
</style>
