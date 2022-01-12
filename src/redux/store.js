import { combineReducers, createStore } from 'redux'
import { favoriteDrinksReducer } from './reducers/favoriteDrinkReducer'
import { liquorSearchReducer } from './reducers/liquorSearchReducer'
import { boardGameReducer } from './reducers/boardGameReducer'

const rootReducers = {
    favoriteDrinks: favoriteDrinksReducer, 
    liquorSearch: liquorSearchReducer,
    boardGame: boardGameReducer
}

const storedState = localStorage.getItem('globalState') ? JSON.parse(localStorage.getItem('globalState')) : {}

const store = createStore(combineReducers(rootReducers), storedState)

store.subscribe(() => {
    localStorage.setItem('globalState', JSON.stringify(store.getState()))
})

export default store
