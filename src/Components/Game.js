import React from "react";
import { useSelector } from "react-redux";
import '../Styles/Game.css'

const Game = () => {

    const gameObj = useSelector(state => {
        return state.boardGame.currentGame
    })

    return (
        <div className="paired-component">
            <h3 className='game-name'>{gameObj.name}</h3>
            <section className='game-info'>
                <img className="game-image" src={gameObj.image_url} /> 
                <aside className='game-specs'>
                    <p>Players:  - </p>
                    <p>Average Play Time: </p>
                </aside>
            </section>
        </div>
    )
    
} 

export default Game