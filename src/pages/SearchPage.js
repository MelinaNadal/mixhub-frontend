import { useState } from 'react';
import Recipes from './Recipes';



export default function SearchPage(props) {
    const [formState, setFormState] = useState({
        search: ''
    });
    const [cocktailData, setCocktailData] = useState({
        items: []
    })

    function handleChange(evt) {
        setFormState(prevState => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }))
    }
    async function search(evt) {
        evt.preventDefault();
        const data = await getCocktails(formState.search);
        console.log(data)
        setCocktailData(data)
        
        setFormState({
            search: ''
        })
    }
    const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

    function getCocktails(searchTerm) {
        return fetch(BASE_URL + '?s=' + searchTerm)
            .then(res => res.json())
    }
    return (
        <div>
            <main className="Page">
                <form onSubmit={search}>
                    <div className="transbox">
                        <input
                            name="search"
                            type="text"
                            className="form-control"
                            value={formState.search}
                            placeholder="Ingredient"
                            onChange={handleChange}
                        />
                        <input type="submit" value="Search" />
                    </div>
                </form>
                <div className="Recipes">
                {cocktailData.drinks &&
            cocktailData.drinks.map((cocktail, idx) => 
        
              <Recipes key={idx} cocktail={cocktail} />
           
            )}
            </div>        
            </main>
        </div>
    )}