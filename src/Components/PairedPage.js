import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drink from './Drink';
import Game from './Game';
import '../Styles/PairedPage.css'
import { addFavoriteDrink, storeCurrentDrink } from '../redux/actions/favoriteDrinkAction'
import { useParams } from 'react-router'
import apiCalls from '../apiCalls'
import { findGame } from '../redux/actions/boardGame'


const PairedPage = () => {

    const { gameId, drinkId } = useParams()

    const dispatch = useDispatch()

    const game = useSelector(state => {
        return state.boardGame.currentGame
    })

    const currentDrink = useSelector(state => {
        return state.favoriteDrinks.currentDrink
    })

    const findSpecificGame = (list) => {
        return list.find(game => game.id === gameId)
    }

    useEffect(() => {
        apiCalls.getGameData()
            .then(data => {
                const gameObj = findSpecificGame(data.games)
                dispatch(findGame(gameObj))
            })
        apiCalls.getSpecificDrink(drinkId)
            .then(data => {
                dispatch(storeCurrentDrink(data.drinks[0]))
            })
    }, [])

    return (
            <section>
                <main className="paired-page">
                    <h2 className='perfect-pairing-title'>Your Perfect Pairing!</h2>
                    <div className='paired-components'>
                        {game && <Game />}
                        <p className='plus-sign'>+</p>
                        {currentDrink && <Drink />}
                    </div>
                    <button className='add-favorite-button'onClick={() => {dispatch(addFavoriteDrink(currentDrink))}}>Add Drink to Favorites!</button>
                </main>
            </section>
    )
}


export default PairedPage