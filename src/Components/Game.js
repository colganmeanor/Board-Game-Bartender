import React from "react";
import { useSelector } from "react-redux";

const Game = () => {

    const game = useSelector(state => {
        return state.boardGame.currentGame
    })

    return (
        <div className="paired-section">
            <h3>{game}</h3>
            <p>Replace this P element with an img for the selected game</p>
        </div>
    )

}

export default Game