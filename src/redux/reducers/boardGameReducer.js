export const initialState = {
    allGamesData: []
}

export const boardGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_GAME_DATA':
            return {
                allGamesData: action.payload
            }
        default:
            return state
    }
}