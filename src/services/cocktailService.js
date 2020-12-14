fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php? i=${searchTerm}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c0f227240amsh55aa92563c9e45cp1e4b12jsn976987091817",
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); 