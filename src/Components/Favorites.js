import React from 'react'
import '../Styles/Favorites.css'
import { useSelector } from 'react-redux'
import Drink from './Drink'

const Favorites = () => {
    const favoriteDrinks = useSelector(state => state.favoriteDrinks.favoriteDrinks)
    console.log("faves", favoriteDrinks)

    const drinks = favoriteDrinks.map(drink => {
            if (favoriteDrinks) {
                return (
                    <div className='fav-drink-card' data-cy='favorite-card'>
                        <h3 className='fav-drink-name'>{drink.strDrink}</h3>
                        <img className='fav-drink-image' src={drink.strDrinkThumb}/>
                    </div>
                )
            } 
    })

    return (
        <div className='favorites-grid' data-cy='fav-drinks-grid'>
            {drinks}
        </div>
    )
}

export default Favorites