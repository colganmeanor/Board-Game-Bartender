import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findGame } from '../redux/actions/boardGame';

const PairingForm = () => {
   
    const dispatch = useDispatch()

    const games = useSelector(state => state.boardGame.allGamesData.games)
   
    const gameNames = games.map((game) => {
        return (
            <option key={game.id} value={game.name} />
        )
    })
   
    return (    
        <form>
            <label htmlFor='game-choice'>
                Choose Your Game!
                <input id='game-choice' list='games' onChange={(event) => dispatch(findGame(event.target.value))}/>
                    <datalist id='games'>
                        {gameNames}
                    </datalist>
                
            </label>
            <label htmlFor='liquor-choice'>
                Whatchya drinking?
                <input list='liquors' id='liquor-choice' />
                <datalist id='liquors' >
                    <option value='Vodka' />
                    <option value='Gin' />
                    <option value='Rum' />
                    <option value='Whiskey' />
                    <option value='Bourbon' />
                    <option value='Tequila' />
                    <option value='Scotch' />
                    <option value='Non Alcoholic' />
                </datalist>

            </label>
            <button>Pair</button>
        </form>
    )
}

export default PairingForm