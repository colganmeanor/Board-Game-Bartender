export const addFavoriteDrink = (drink) => {
    return {
        type: 'ADD_FAVORITE_DRINK',
        payload: drink
    }
}

export const removeFavoriteDrink = (drink) => {
    return {
        type: 'REMOVE_FAVORITE_DRINK',
        payload: drink
    }
}