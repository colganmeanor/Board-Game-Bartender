import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findGame } from '../redux/actions/boardGame';
import { setLiquorType, setRandomDrink } from '../redux/actions/liquorSearch'

const PairingForm = () => {

    const dispatch = useDispatch()

    const games = useSelector(state => state.boardGame.allGamesData.games)
    const type = useSelector(state => state.liquorSearch.liquorSearchWord)

    const gameNames = games.map((game) => {
        return (
            <option key={game.id} value={game.name} />
        )
    })

    const findRandomDrink = (event) => {
        event.preventDefault()
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
            .then(res => res.json())
                .then(data => {
                    console.log('data', data)
                    let randomNum = Math.floor(Math.random() * data.drinks.length)
                    console.log("dataaRando", randomNum)
                    dispatch(setRandomDrink(data.drinks[randomNum]))
                })
    }

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
                <input list='liquors' id='liquor-choice' onChange={(event) => dispatch(setLiquorType(event.target.value))}/>
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
            <button onClick={(event) => findRandomDrink(event)}>Pair</button>
        </form>
    )
}

export default PairingForm