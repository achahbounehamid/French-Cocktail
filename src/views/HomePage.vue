<template>
  <div class="search-bar">
    <input
      v-model="searchText"
      type="text"
      name="search"
      class="SearchBar-input"
      placeholder="Votre recherche ici....."
    />
    <button @click.prevent="performSearch" class="SearchBar-button">
      Recherche
    </button>
  </div>
  <div class="responseSearch" v-if="searchResults.length > 0">
    <ul class="detailsSearch">
      <li
        class="cokctailList"
        v-for="cocktail in searchResults"
        :key="cocktail.idDrink"
      >
        <router-link
          :to="{
            name: 'cocktailDetails',
            params: { idDrink: cocktail.idDrink },
          }"
        >
          <figure classe="resultats-cocktails">
            <img
              class="searchImg"
              :src="cocktail.strDrinkThumb"
              :alt="cocktail.strDrink"
            />
            <figcaption class="titleCock">{{ cocktail.strDrink }}</figcaption>
          </figure>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="drinks">
    <!-- Affichez les cocktails par défaut -->
    <CocktailNomAlcol
      v-for="(cocktail, index) in cocktails.slice(0, 8)"
      :key="index"
      :strDrink="cocktail.strDrink"
      :strDrinkThumb="cocktail.strDrinkThumb"
      :idDrink="cocktail.idDrink"
    />
  </div>

  <div class="active">
    <Carousel :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints">
      <Slide v-for="cocktail in cocktails" :key="cocktail.idDrink">
        <figure class="custom-slide">
          <router-link
            v-if="cocktail.idDrink"
            :to="{
              name: 'cocktailDetails',
              params: { idDrink: cocktail.idDrink },
            }"
          >
            <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
          </router-link>
          <figcaption>
            <h3>{{ cocktail.strDrink }}</h3>
          </figcaption>
        </figure>
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
import { searchCocktailsByName } from "@/services/ApiCocktailDB.js";
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
      searchText: "",
      searchResults: [],
      cocktails: [],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        530: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        550: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        650: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        800: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    async performSearch() {
      this.searchResults = [];
      try {
        const response = await searchCocktailsByName(this.searchText);
        if (!response.ok) {
          throw new Error("Erreur de recherche");
        }
        const data = await response.json();
        this.searchResults = data.drinks || [];
      } catch (error) {
        console.error("Erreur lors de la recherche de cocktails:", error);
      }
    },
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
p {
  color: green;
  font-size: 30px;
}
.drinks {
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.drinks img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.active {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.active img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  /* Coins arrondis des images */
}
.search-container {
  display: flex;
  margin: 20px;
  width: 20%;
}
.search-bar {
  margin: 50px;
}

input[type="text"] {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  font: 1rem "Fira Sans", sans-serif;
}
.searchImg {
  width: 250px;
  border-radius: 10px;
  transition: transform 0.1s;
}

.searchImg:hover {
  transform: scale(1.1);
}
.detailsSearch {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
.titleCock {
  font-family: "Quicksand";
  color: #404e87;
  font-size: 25px;
  text-decoration: none;
}
@media screen and (max-width: 1337px) {
  .drinks {
    height: auto;
  }
}
@media screen and (max-width: 680px) {
  .drinks {
    height: auto;
    flex-direction: column;
  }
  .active img {
    width: 50%;
  }
}
</style>
