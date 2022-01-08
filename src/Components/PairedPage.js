import React from "react";
import { useSelector, useDispatch } from "react-redux";


const PairingPage = () => {

const game = useSelector(state => {
    return state.boardGame.currentGame
})

// const drink = useSelector

return (
    <section>
        <main>
            <h2>Your Perfect Pairing!</h2>
            <div className="paired-section">
                <aside>
                    <h3>Game Name Here</h3>
                    <p>Replace this P element with an img for the selected game</p>
                </aside>
            </div>
            <div className="paired-section">
                <aside>
                    <h3>Drink Name Here</h3>
                    <p>Replace this P element with an img for the selected cocktail</p>
                </aside>
            </div>
            <button>Add to Favorite Pairs!</button>
        </main>
    </section>
)

}


export default PairedPage