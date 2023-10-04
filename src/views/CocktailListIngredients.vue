<!-- <template>
  <div>
    <h1>Liste des Cocktails par Ingrédient</h1>
    <ul>
      <li
        v-for="listIngredient in listIngredients"
        :key="listIngredient.strIngredient2"
        @click="fetchCocktailsByIngredient(listIngredient)"
      >
        <img :src="listIngredient.strIngredientThumb" alt="Ingredient" />
        {{ listIngredient.strIngredient2 }}
      </li>
    </ul>
    <div v-if="selectedIngredient">
      <h2>Cocktails contenant {{ selectedIngredient.strIngredient2 }}</h2>
      <ul>
        <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
          {{ cocktail.strDrink }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getIngredient } from "@/services/ApiCocktailDB.js"; // Assurez-vous d'importer correctement votre fonction

export default {
  data() {
    return {
      listIngredients: [], // Initialisez un tableau pour stocker les ingrédients
      selectedIngredient: null,
      cocktails: [],
    };
  },
  methods: {
    async fetchIngredients() {
      try {
        const response = await getIngredient(); // Faites la requête à l'API
        const data = await response.json(); // Convertissez la réponse en JSON

        if (data && data.drinks) {
          this.listIngredients = data.drinks.map((ingredient) => ({
            strIngredient2: ingredient.strIngredient1,
            strIngredientThumb: ingredient.strIngredientThumb,
          }));
        } else {
          console.log("Aucun ingrédient trouvé.");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    },
    async fetchCocktailsByIngredient(ingredient) {
      this.selectedIngredient = ingredient;
      // Vous pouvez implémenter cette fonction pour récupérer les cocktails en fonction de l'ingrédient sélectionné ici
    },
  },
  mounted() {
    this.fetchIngredients(); // Appelez la fonction pour récupérer les ingrédients lors du montage du composant
  },
};
</script> -->
