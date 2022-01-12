const initialState = {
    favoriteDrinks: [],
    currentDrink: {}
}

export const favoriteDrinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_DRINK':
            const foundDrink = state.favoriteDrinks.find(drink => drink.idDrink === action.payload.idDrink)
            if (state.favoriteDrinks.includes(foundDrink)) {
                return state
            } else {
                return {
                    ...state,
                    favoriteDrinks: [...state.favoriteDrinks, action.payload]
                }
            }
        case 'REMOVE_FAVORITE_DRINK':
            const updatedArray = state.favoriteDrinks.filter((drink) => {
                return drink.idDrink !== action.payload
            })
            return {
                ...state,
                favoriteDrinks: updatedArray
            }
        case 'STORE_CURRENT_DRINK':
            return {
                ...state,
                currentDrink: action.payload
            }
        default:
            return state
    }
}