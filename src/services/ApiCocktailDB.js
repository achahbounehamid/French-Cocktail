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
function searchCocktailsApi(searchTerm) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + searchTerm
  );
}
export { getListNonAlcool, getOneCocktailNonAlcool, searchCocktailsApi };
