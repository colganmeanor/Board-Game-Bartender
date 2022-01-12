import React from "react"
import { useSelector } from "react-redux"
import '../Styles/Game.css'

const Game = () => {

    const gameObj = useSelector(state => {
        return state.boardGame.currentGame
    })

    const avgGameTime = Math.floor((gameObj.min_playtime + gameObj.max_playtime) / 2)

    return (
        <div aria-label="Chosen Game Result" className="paired-component">
            <h3 className='game-name'>{gameObj.name}</h3>
            <section aria-label="Game Information" className='game-info'>
                <img alt={`${gameObj.name} image`} className="game-image" src={gameObj.image_url} /> 
                <aside aria-label="Game Players and Play Time" className='game-specs'>
                    <p>Players: {gameObj.min_players} - {gameObj.max_players}</p>
                    <p>Average Play Time: {avgGameTime} mins</p>
                </aside>
            </section>
        </div>
    )
}

export default Game