import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Drink from './Drink'
import Game from './Game'
import '../Styles/PairedPage.css'
import { addFavoriteDrink, storeCurrentDrink } from '../redux/actions/favoriteDrinkAction'
import { useParams } from 'react-router'
import apiCalls from '../apiCalls'
import { findGame } from '../redux/actions/boardGame'
import { NavLink } from 'react-router-dom'

const PairedPage = () => {

    const { gameId, drinkId } = useParams()
    const [ error, setError ] = useState('')

    const dispatch = useDispatch()

    const game = useSelector(state => state.boardGame.currentGame)
    const currentDrink = useSelector(state => state.favoriteDrinks.currentDrink)

    useEffect(() => {
        apiCalls.getSpecificGame(gameId)
            .then(data => {
                if (data.games) {
                    dispatch(findGame(data.games[0]))
                } else {
                    setError(data.message)
                }
            })
        apiCalls.getSpecificDrink(drinkId)
            .then(data => {
                if (data.drinks) {
                    dispatch(storeCurrentDrink(data.drinks[0]))
                } else {
                    setError(data.message)
                }
            })
    }, [])

    return (
        <section>
            { error ? <p className='error-message-pair-page'>Sorry, there's been an error: '{error}'</p> :
                <main className="paired-page">
                    <h2 className='perfect-pairing-title'>Your Perfect Pairing!</h2>
                    <div aria-label="Paired Drink and Game Results" className='paired-components'>
                        {game && <Game />}
                        <p className='plus-sign'>+</p>
                        {currentDrink && <Drink />}
                    </div>
                    <div aria-label="bottom button section" className='bottom-buttons'>
                        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                            <button className='return-button'>Return to Main</button>
                        </NavLink>
                        <button className='add-favorite-button' data-cy='favorites-button' onClick={() => { dispatch(addFavoriteDrink(currentDrink)) }}>Add Drink to Favorites!</button>
                    </div>
                </main>
            }
        </section >
    )
}

export default PairedPage