<template>
  <div>
    <h1>Liste des Catégories de Cocktails</h1>
    <ul>
      <li v-for="category in categories" :key="category">
        <a href="#" @click.prevent="selectCategory(category)">{{ category }}</a>
      </li>
    </ul>
    <div v-if="selectedCategory">
      <h2>{{ selectedCategory.name }}</h2>
      <img :src="selectedCategory.image" alt="Cocktail Image" />
      <p>{{ selectedCategory.instructions }}</p>
    </div>
  </div>
</template>

<script>
import { getCategory } from "@/services/ApiCocktailDB.js";
// import { useRouter } from "vue-router"; // Importez useRouter depuis vue-router

export default {
  name: "CocktailCategory",
  data() {
    return {
      categories: [],
      selectedCategory: null,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      getCategory()
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.drinks.map((drink) => drink.strCategory);
        })
        .catch((error) => {
          console.error("Une erreur s'est produite :", error);
        });
    },
    // selectCategory(category) {
    //   // Utilisez useRouter pour obtenir l'instance du routeur
    //   const router = useRouter();

    //   // Naviguez vers la vue ResultsView en passant le nom de la catégorie en tant que paramètre
    //   router.push({ name: "results", params: { categoryName: category } });
    // },
    selectCategory(category) {
      // Émettre un événement categoryClick avec la catégorie sélectionnée
      this.$emit("categoryClick", category);
    },
  },
};
</script>

<style scoped lang="scss">
div ul li {
  list-style-type: none;
}
</style>
