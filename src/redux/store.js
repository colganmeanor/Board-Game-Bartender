import { combineReducers, createStore } from 'redux'
import { favoriteDrinksReducer } from './reducers/favoriteDrinkReducer'
import { liquorSearchReducer } from './reducers/liquorSearchReducer'
import { boardGameReducer } from './reducers/boardGameReducer'

const rootReducers = {
    favoriteDrinks: favoriteDrinksReducer, 
    liquorSearch: liquorSearchReducer,
    boardGame: boardGameReducer
}

const store = createStore(combineReducers(rootReducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
    store.subscribe(() => {
        console.log('state', store.getState())
})