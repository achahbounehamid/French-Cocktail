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
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(url);
}

function getIngredient() {
  return fetch`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
}
function getIngredientByName(ingredientName) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`;
  return fetch(url);
}

function getCategory() {
  return fetch`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
}

function getCocktailByCategory(category) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  return fetch(url);
}

export {
  getListNonAlcool,
  getOneCocktailNonAlcool,
  searchCocktailsByName,
  fetchCocktailsByIngredient,
  getIngredient,
  getCategory,
  getIngredientByName,
  getCocktailByCategory,
};
