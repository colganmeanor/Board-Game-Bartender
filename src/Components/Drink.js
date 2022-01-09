import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Drink.css'

const Drink = () => {

    const currentDrink = useSelector(state => {
        return state.favoriteDrinks.currentDrink
    })

    const getIngredients = (keys) => {
        return keys.reduce((ingredients, each) => {
            if (each.includes('strIngredient') && currentDrink[each]) {
                ingredients.push(currentDrink[each])
            }
            return ingredients
        }, [])
    }

    const getMeasures = (keys) => {
        return keys.reduce((measures, each) => {
            if (each.includes('strMeasure') && currentDrink[each]) {
                measures.push(currentDrink[each])
            }
            return measures
        }, [])
    }

    const makeTheSameLength = (ingredients, measures) => {
        if (ingredients.length === measures.length) {
            return {ingredients, measures}
        } else if (ingredients.length > measures.length) {
            let difference = ingredients.length - measures.length
            for (let i = 0; i < difference; i++) {
                measures.push('')
            }
            return {ingredients, measures}
        } else {
            return {ingredients: [], measures: []}
        }
    }

    const createIngredientAmount = (currentDrink) => {
        const drinkKeys = Object.keys(currentDrink)
        const ingredients = getIngredients(drinkKeys)
        const measures = getMeasures(drinkKeys)
        return (makeTheSameLength(ingredients, measures))
    }

    const recipe = createIngredientAmount(currentDrink)

    const ingredientsList = recipe.ingredients.map((ingredient, index) => {
        return (
            <p>{`${recipe.measures[index]} ${ingredient}`}</p>
        )
    })

    return (
        <div className='paired-component'>
            <h3>{currentDrink.strDrink}</h3>
            <img class='drink-image' src={currentDrink.strDrinkThumb} />
            {ingredientsList}
        </div>
    )

}

export default Drink