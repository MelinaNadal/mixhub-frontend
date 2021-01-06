const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
function fetchCocktailData(searchTerm) {
   return fetch(BASE_URL + '?s=' + searchTerm)
    .then(res => res.json())
}

