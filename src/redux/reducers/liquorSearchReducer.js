
export const initialState = {
    allDrinksData: [],
    liquorSearchWord: '',
    randomDrink: {}
}

export const liquorSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_DRINK_DATA':
            return {
                ...state,
                allDrinksData: [...state.allDrinksData, action.payload]
            }
        case 'SET_LIQUOR_TYPE':
            return {
                ...state,
                liquorSearchWord: action.payload
            }
        case 'SET_RANDOM_DRINK':
            return {
                ...state,
                randomDrink: action.payload
            }
        default:
            return state
    }
}