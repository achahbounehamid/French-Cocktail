<script>
import { searchCocktailsByName } from "../views/CocktailsNameViews.vue";

export default {
  name: "CocktailNameViews",
  data() {
    return {
      searchTerm: "",
      cocktails: [],
    };
  },
  methods: {
    async performSearch() {
      try {
        const response = await searchCocktailsByName(this.searchTerm);
        this.cocktails = response.data.drinks || [];
      } catch (error) {
        console.error("Erreur lors de la récupération des cocktails :", error);
      }
    },
  },
};
</script>
