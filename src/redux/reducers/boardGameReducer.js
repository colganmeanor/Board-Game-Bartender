export const initialState = {
    allGamesData: [],
    currentGame: {},
    currentGameName: ''
}

export const boardGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_GAME_DATA':
            return {
                ...state,
                allGamesData: action.payload
            }
        case 'FIND_GAME':
            return {
                ...state,
                currentGame: action.payload
            }
        case 'SET_GAME_NAME':
            return {
                ...state,
                currentGameName: action.payload
            }
        default:
            return state
    }
}