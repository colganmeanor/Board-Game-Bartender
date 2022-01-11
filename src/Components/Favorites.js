import React from 'react'
import '../Styles/Favorites.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeFavoriteDrink } from '../redux/actions/favoriteDrinkAction'


const Favorites = () => {
    const favoriteDrinks = useSelector(state => state.favoriteDrinks.favoriteDrinks)
    const dispatch = useDispatch()

    const drinks = favoriteDrinks.map(drink => {
        if (favoriteDrinks) {
            return (
                <div className='fav-drink-card' data-cy='favorite-card'>
                    <div className='left-side-card'>
                        <h3 className='fav-drink-name'>{drink.strDrink}</h3>
                        <button className='remove-button' data-cy='remove-button' onClick={() => dispatch(removeFavoriteDrink(drink.idDrink))}>Remove</button>
                    </div>
                        <img className='fav-drink-image' src={drink.strDrinkThumb}/>    
                </div>
            )
        } 
    })

    
    return (
        <div>
            <NavLink to={'/'} style={{textDecoration: 'none'}}>
                <button className='favorites-return-button' data-cy='favorite-return-button'>Return to Main</button>   
            </NavLink>
            <div className='favorites-grid' data-cy='fav-drinks-grid'>
                {drinks}
            </div>
        </div>
        
    )
}

export default Favorites