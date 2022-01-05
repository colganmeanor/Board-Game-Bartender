// import { addFavoriteDrink } from '../actions/favoriteDrinkAction'

const initialState = {
    favoriteDrinks: []
}

export const favoriteDrinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_DRINK':
            return {
                favoriteDrinks: [...state.favoriteDrinks, action.payload]
            }
        case 'REMOVE_FAVORITE_DRINK':
            const updatedArray = state.favoriteDrinks.filter((drink) => {
                return drink !== action.payload
            })
            return {
                favoriteDrinks: updatedArray
            }
    }
}