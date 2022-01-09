import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeCurrentDrink } from "../redux/actions/favoriteDrinkAction";
import '../Styles/Drink.css'

const Drink = () => {

    const dispatch = useDispatch()
    
    const drink = useSelector(state => {
        return state.liquorSearch.randomDrink
    })

    const fetchDrinkData = (id) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
            .then(data => dispatch(storeCurrentDrink(data.drinks[0])))
                .then(data => createIngredientAmount())
    }

    useEffect(() => {
        fetchDrinkData(drink.idDrink)
    }, [])

    let drinkSpecifics = useSelector(state => state.favoriteDrinks.currentDrink)

    const getIngredients = (keys) => {
        return keys.reduce((ingredients, each) => {
            if (each.includes('strIngredient') && drinkSpecifics[each]) {
                ingredients.push(drinkSpecifics[each])
            }
            return ingredients
        }, [])
    }
 

    const createIngredientAmount = (drinkSpecifics) => {
        const drinkKeys = Object.keys(drinkSpecifics)
        const ingredients = getIngredients(drinkKeys)
        const measures = getMeasures(drinkKeys)
        console.log(makeTheSameLength(ingredients, measures))
    }

    return (
        <div className="paired-component">
            <h3>{drink.strDrink}</h3>
            <img class="drink-image" src={drink.strDrinkThumb} />
            {drinkSpecifics ? <p>current drink is set</p> : <p>Not yet loaded current drink</p>}
        </div>
    )

}

export default Drink