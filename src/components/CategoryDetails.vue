<script>
import CocktailCategory from "@/components/CocktailCategory.vue";
import CategoryDetails from "@/components/CategoryDetails.vue";
import { getCocktailByCategory } from "@/services/ApiCocktailDB.js";
export default {
  components: {
    CocktailCategory,
    CategoryDetails,
  },
  data() {
    return {
      selectedCategory: null,
      // cocktailsInCategory: [], // Tableau pour stocker les cocktails de la catégorie
    };
  },
  methods: {
    showCategoryDetails(categoryName) {
      this.selectedCategory = categoryName;
      // Appel de la méthode pour récupérer les cocktails de la catégorie
      this.getCocktailsByCategory(categoryName);
    },
    async getCocktailsByCategory(categoryName) {
      // Effectuez une requête pour obtenir les cocktails de la catégorie
      try {
        const response = await getCocktailByCategory(categoryName);
        const data = await response.json();

        if (data && data.drinks) {
          this.cocktailsInCategory = data.drinks;
        } else {
          console.log("Aucun cocktail trouvé pour cette catégorie.");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    },
  },
};
</script>
