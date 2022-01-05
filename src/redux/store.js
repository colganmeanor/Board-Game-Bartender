import { combineReducers, createStore } from 'redux'
import { favoriteDrinksReducer } from './reducers/favoriteDrinkReducer'
import { addFavoriteDrink, removeFavoriteDrink } from './actions/favoriteDrinkAction'
import { liquorSearchReducer } from './reducers/liquorSearchReducer'

const rootReducer = combineReducers(favoriteDrinksReducer, liquorSearchReducer)


const store = createStore(rootReducer)

export default store
    store.subscribe(() => {
        console.log('test', store.getState())
})

store.dispatch(addFavoriteDrink('mojito'))
store.dispatch(addFavoriteDrink('natty light'))

store.dispatch(removeFavoriteDrink('mojito'))