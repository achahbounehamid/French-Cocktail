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
function searchCocktailsByName(strDrink) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + strDrink
  );
}
export { getListNonAlcool, getOneCocktailNonAlcool, searchCocktailsByName };
