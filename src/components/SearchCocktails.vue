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
      <i class="fas fa-search search-icon"></i>Recherche
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
          <figure>
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
</template>

<script>
import { searchCocktailsByName } from "@/services/ApiCocktailDB.js";

export default {
  name: "SearchCocktails",
  components: {},
  data() {
    return {
      searchText: "",
      searchResults: [],
      cocktails: [],
    };
  },

  methods: {
    async performSearch() {
      try {
        const response = await searchCocktailsByName(this.searchText);
        if (!response.ok) {
          throw new Error("Erreur de recherche");
        }
        const data = await response.json();
        const searchResults = data.drinks || [];
        // Émettez l'événement personnalisé avec les résultats
        this.$emit("search-results-updated", searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche de cocktails:", error);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.search {
  display: flex;
}
.search-bar input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  font-size: 16px;
}

.search-bar button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
}
</style>
