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

function getIngredient() {
  return fetch`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
}
function getCategory() {
  return fetch`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
}
function getCocktailWithIngredient(strIngredient1) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + strIngredient1
  );
}

export {
  getListNonAlcool,
  getOneCocktailNonAlcool,
  searchCocktailsByName,
  fetchCocktailsByIngredient,
  getIngredient,
  getCategory,
  getCocktailWithIngredient,
};
