


export const initialState = {
    allDrinksData: []
}

export const liquorSearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_DRINK_DATA':
        return {
            allDrinksData: action.payload
        }
        default:
            return state
    }
}