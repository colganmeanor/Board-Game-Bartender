import { combineReducers, createStore } from 'redux'
import { favoriteDrinksReducer } from './reducers/favoriteDrinkReducer'
import { addFavoriteDrink, removeFavoriteDrink } from './actions/favoriteDrinkAction'
import { liquorSearchReducer } from './reducers/liquorSearchReducer'
import { boardGameReducer } from './reducers/boardGameReducer'
// import { loadDrinkData } from './actions/liquorSearch'

const rootReducers = {
    favoriteDrinks: favoriteDrinksReducer, 
    liquorSearch: liquorSearchReducer,
    boardGame: boardGameReducer
}

const storedState = localStorage.getItem('globalState') ? JSON.parse(localStorage.getItem('globalState')) : {}

const store = createStore(combineReducers(rootReducers), storedState)

export default store

store.subscribe(() => {
console.log('state', store.getState())
})

store.subscribe(() => {
    localStorage.setItem('globalState', JSON.stringify(store.getState()))
})




// store.dispatch(addFavoriteDrink('mojito'))
// store.dispatch(addFavoriteDrink('natty light'))
// store.dispatch(removeFavoriteDrink('mojito'))