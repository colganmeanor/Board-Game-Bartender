import React from 'react'
import '../Styles/Favorites.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavoriteDrink } from '../redux/actions/favoriteDrinkAction'

const Favorites = () => {
    const favoriteDrinks = useSelector(state => state.favoriteDrinks.favoriteDrinks)
    const dispatch = useDispatch()

    const drinks = favoriteDrinks.map(drink => {
        if (favoriteDrinks) {
            return (
                <div aria-label={`${drink.strDrink} Favorite Card`} className='fav-drink-card' data-cy='favorite-card' key={drink.idDrink}>
                    <div aria-label= "Drink Image and Removal Button" className='left-side-card'>
                        <h3 className='fav-drink-name'>{drink.strDrink}</h3>
                        <button aria-label={`Remove ${drink.strDrink} from Favorite Drinks`} className='remove-button' data-cy='remove-button' onClick={() => dispatch(removeFavoriteDrink(drink.idDrink))}>Remove</button>
                    </div>
                        <img alt={`${drink.strDrink} image`} className='fav-drink-image' src={drink.strDrinkThumb}/>    
                </div>
            )
        } 
    })

    return (
        <div>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <button aria-label="Return to Main Page" className='favorites-return-button' data-cy='favorite-return-button'>Return to Main</button>   
            </Link>
            <div aria-label="Favorite Drink Section" className='favorites-grid' data-cy='fav-drinks-grid'>
                {drinks}
            </div>
        </div>
        
    )
}

export default Favorites