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
    }

    useEffect(() => {
        fetchDrinkData(drink.idDrink)
    }, [])

    return (
        <div className="paired-component">
            <h3 className='drink-name'>{drink.strDrink}</h3>
            <section className='drink-info'>
                <img className="drink-image" src={drink.strDrinkThumb} />
                <aside className='drink-specs'>
                    <p>Ingredients</p>
                    <p>Instructions</p>
                </aside>
            </section>
        </div>
    )

}

export default Drink