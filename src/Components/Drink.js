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
            <h3>{drink.strDrink}</h3>
            <img class="drink-image" src={drink.strDrinkThumb} />
        </div>
    )

}

export default Drink