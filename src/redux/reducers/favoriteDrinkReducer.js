import { addFavoriteDrink } from '../actions/favoriteDrinkAction'

const initialState = {
    favoriteDrinks: []
}

export const favoriteDrinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_DRINK':
            return {
                favoriteDrinks: [...state.favoriteDrinks, action.payload]
            }
    }
}