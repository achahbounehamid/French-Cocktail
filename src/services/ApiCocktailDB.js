function getListNonAlcool() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
}
function getOneCocktailNonAlcool(idDrink) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink
  );
}
function searchCocktailsByName(searchText) {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  return fetch(apiUrl);
}
function fetchCocktailsByIngredient(ingredient) {
  const apiUrlIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(apiUrlIngredient);
}

export {
  getListNonAlcool,
  getOneCocktailNonAlcool,
  searchCocktailsByName,
  fetchCocktailsByIngredient,
};
