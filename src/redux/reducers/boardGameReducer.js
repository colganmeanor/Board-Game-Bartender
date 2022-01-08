export const initialState = {
    allGamesData: [],
    currentGame: {}
}

export const boardGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_GAME_DATA':
            return {
                allGamesData: action.payload
            }
        case 'FIND_GAME':
            return {
                ...state,
                currentGame: action.payload
            }    
        default:
            return state
    }
}