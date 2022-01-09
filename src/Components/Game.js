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
            <section className='game-info'>
                <img className="game-image" src={game.image_url} /> 
                <aside className='game-specs'>
                    <p>Players:  - </p>
                    <p>Average Play Time: </p>
                </aside>
            </section>
        </div>
    )
    
}

export default Game