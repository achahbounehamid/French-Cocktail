<!-- CocktailCategoryViews.vue -->
<template>
  <div>
    <CocktailCategory @categoryClick="showCategoryDetails" />
    <CategoryDetails :categoryName="selectedCategory" />
    <router-link
      :to="{ name: 'results', params: { categoryName: selectedCategory } }"
      class="btn"
    >
      Voir les résultats
    </router-link>
  </div>
</template>

<script>
import CocktailCategory from "@/components/CocktailCategory.vue";
import CategoryDetails from "@/components/CategoryDetails.vue";

export default {
  components: {
    CocktailCategory,
    CategoryDetails,
  },
  data() {
    return {
      selectedCategory: null,
    };
  },
  methods: {
    showCategoryDetails(categoryName) {
      this.selectedCategory = categoryName;
    },
    selectCategory(category) {
      // Naviguez vers la vue des résultats en passant le nom de la catégorie
      this.$router.push({
        name: "results",
        params: { categoryName: category },
      });
    },
  },
};
</script>
