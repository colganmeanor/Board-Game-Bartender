import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Drink = () => {

    
    
    const drink = useSelector(state => {
        return state.liquorSearch.randomDrink
    })

    const fetchDrinkData = (id) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => console.log('data from fetch call for looking up specific drink by ID', data))
    }

    useEffect(() => {
        fetchDrinkData(drink.idDrink)
    }, [])

    return (
        <div className="paired-component">
            <h3>{drink.strDrink}</h3>
            <p>Replace this P element with an img for the selected drink</p>
            {/* <img src={drink.strDrinkThumb} /> */}
        </div>
    )

}

export default Drink