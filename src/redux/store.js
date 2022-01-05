import { combineReducers, createStore } from 'redux'
import { favoriteDrinksReducer } from './reducers/favoriteDrinkReducer'
import { addFavoriteDrink, removeFavoriteDrink } from './actions/favoriteDrinkAction'
import { liquorSearchReducer } from './reducers/liquorSearchReducer'
import { loadDrinkData } from './actions/liquorSearch'

const reducers = {
    favoriteDrinks: favoriteDrinksReducer, 
    liquorSearch: liquorSearchReducer
}

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer)

export default store
    store.subscribe(() => {
        console.log('state', store.getState())
})

store.dispatch(addFavoriteDrink('mojito'))
store.dispatch(addFavoriteDrink('natty light'))
store.dispatch(removeFavoriteDrink('mojito'))