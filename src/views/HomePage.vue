<template>
  <div class="drinks">
    <CocktailNomAlcol
      v-for="(cocktail, index) in cocktails.slice(0, 8)"
      :key="index"
      :strDrink="cocktail.strDrink"
      :strDrinkThumb="cocktail.strDrinkThumb"
      :idDrink="cocktail.idDrink"
    />
  </div>
  <div class="active">
    <Carousel :items-to-show="3" :wrap-around="true">
      <Slide v-for="(cocktail, index) in cocktails.slice(0, 8)" :key="index">
        <div class="carousel__item">
          <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
<script>
import CocktailNomAlcol from "@/components/CocktailNomAlcol.vue";
import { getListNonAlcool } from "@/services/ApiCocktailDB.js";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  name: "HomePage",
  components: defineComponent({
    CocktailNomAlcol,
    Carousel,
    Slide,
    Navigation,
  }),
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
  height: px;
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
.active {
  margin-bottom: 50px;
}
.carousel__item {
  width: 200px;
  height: 200px;
}
</style>
