export const loadDrinkData = (data) => {
    return {
        type: 'LOAD_DRINK_DATA',
        payload: data
    }
}

export const setLiquorType = (drink) => {
    return {
        type: 'SET_LIQUOR_TYPE',
        payload: drink
    }
}

export const setRandomDrink = (randomDrink) => {
    return {
        type: 'SET_RANDOM_DRINK',
        payload: randomDrink
    }
}