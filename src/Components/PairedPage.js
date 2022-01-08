import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Drink from "./Drink";
import Game from "./Game";
import '../Styles/PairedPage.css'


const PairedPage = () => {

    const game = useSelector(state => {
        return state.boardGame.currentGame
    })

    const drink = useSelector(state => {
        return state.liquorSearch.randomDrink
    })

    const currentDrink = useSelector(state => {
        return state.favoriteDrinks.currentDrink.drinks
    })


return (
    <section>
        <main className="paired-page">
            <h2>Your Perfect Pairing!</h2>
            <div className='paired-components'>
                {drink && <Drink />}
                {game && <Game />}
            </div>
            <button>Add to Favorite Pairs!</button>
        </main>
    </section>
)

}


export default PairedPage