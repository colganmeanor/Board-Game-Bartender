import React from "react";
import { useSelector } from "react-redux";

const Drink = () => {

    const drink = useSelector(state => {
        return state.liquorSearch.randomDrink
    })

    return (
        <div className="paired-section">
            <h3>{drink.strDrink}</h3>
            <p>Replace this P element with an img for the selected drink</p>
        </div>
    )

}

export default Drink