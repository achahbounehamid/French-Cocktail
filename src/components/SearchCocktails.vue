<template>
  <div class="search">
    <input
      class="search-field"
      type="text"
      v-model="searchQuery"
      name="searchQuery"
    />
    <button type="submit" class="search-btn" @click="performSearch">
      <i class="fas fa-search search-icon"></i>Recherche
    </button>
  </div>
</template>

<script>
import { searchCocktailsByName } from "@/services/ApiCocktailDB.js";

export default {
  name: "CocktailNameViews",
  data() {
    return {
      searchQuery: "",
      cocktails: [],
    };
  },
  methods: {
    async performSearch() {
      try {
        const response = await searchCocktailsByName(this.searchQuery);
        this.cocktails = response.data.cocktails || [];
      } catch (error) {
        console.error("Erreur lors de la recherche de cocktails :", error);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.search {
  display: flex;
}

.search-bar {
  background-color: white;
  border-radius: 10rem;
  display: flex;
  margin: 1.5rem;
  max-width: 25rem;
}

.search-field {
  border: none;
  border-radius: 10rem;
  color: #66a6ff;
  font-size: 1.2rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  width: 100%;
}

::placeholder {
  color: #cce2ff;
}

:-ms-input-placeholder {
  color: #cce2ff;
}

::-ms-input-placeholder {
  color: #cce2ff;
}

.search-btn {
  background-image: linear-gradient(to right, #89f7fe, #66a6ff);
  border-width: 0;
  border-radius: 10rem;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  justify-content: space-around;
  outline-width: 0;
  padding: 0.5rem 2rem;
  transition: all 0.2s ease;
}

.search-btn:hover {
  cursor: pointer;
  transform: scale(1.08);
}

.search-icon {
  margin-right: 1rem;
}
</style>
