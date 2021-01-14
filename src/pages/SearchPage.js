import { useState } from 'react';
import { Link } from "react-router-dom";


const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'


function fetchCocktailData(searchTerm) {
   return fetch(BASE_URL + '?s=' + searchTerm)
    .then(res => res.json())
}
export default function SearchPage(props){
    const [ formState, setFormState ] = useState({
        search:''
    })
    const [ cocktailData, setCocktailData ] = useState({
        items:[] 
      })

    function handleChange(evt){
        setFormState(prevState => ({
            ...prevState,
            [evt.target.name]:evt.target.value
        }))
    }
    async function search(evt){
        evt.preventDefault();
        const data = await getCocktails(formState.search);
        setCocktailData(data)
        setFormState({
            search:''
        })
        
    }
    return(
        <main className="Page">
            <form onSubmit={search}>
                <div className="transbox">  
                <input name="search" type="text" className="form-control" value={formState.search} placeholder="Ingredient"  onChange={handleChange}/>
                <input type="submit" value="Search"/>
                </div>
            </form>
                <div className="collection">
                    {bookData.items && bookData.items.map((book,idx)=>
                    <SearchedIngredient coctail={cocktail} key={idx}/>
                    )}
                </div>
        </main>
    )
}