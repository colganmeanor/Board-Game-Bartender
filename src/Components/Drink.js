import React from 'react'
import { useSelector } from 'react-redux'
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
            <p key={index}>{`${recipe.measures[index]} ${ingredient}`}</p>
        )
    })

    return (
        <div aria-label="Random Drink Result" className="paired-component" key={currentDrink.idDrink}>
            <h3 className='drink-name' data-cy='drink-name'>{currentDrink.strDrink}</h3>
            <section aria-label="Drink Information" className='drink-info'>
                <img alt={`${currentDrink.strDrink} image`} className="drink-image" src={currentDrink.strDrinkThumb} />
                <aside aria-label="Drink Ingredients" className='drink-specs'>
                    {ingredientsList}
                </aside>
            </section>
        </div>
    )
}

export default Drink