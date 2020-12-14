fetch("https://the-cocktail-db.p.rapidapi.com/filter.php? i=${searchTerm}", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "SIGN-UP-FOR-KEY",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); 