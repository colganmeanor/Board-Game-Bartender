import React from "react";
import { useSelector } from "react-redux";
import '../Styles/Game.css'

const Game = () => {

    const gameName = useSelector(state => {
        return state.boardGame.currentGame
    })

    const gamesList = useSelector(state => {
        return state.boardGame.allGamesData.games
    })

    const game = gamesList.find((game) => {
        return game.name === gameName
    })

    return (
        <div className="paired-component">
            <h3 className='game-name'>{game.name}</h3>
            <img className="game-image" src={game.image_url} />
        </div>
    )
    
}
// game.description in some cases returns a string with paragraph tags - need to figure out a way to parse this out? 

export default Game