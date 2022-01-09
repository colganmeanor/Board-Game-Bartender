import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drink from './Drink';
import Game from './Game';
import '../Styles/PairedPage.css'
import { addFavoriteDrink } from '../redux/actions/favoriteDrinkAction';



const PairedPage = () => {

    const dispatch = useDispatch()

    const game = useSelector(state => {
        return state.boardGame.currentGame
    })

    const currentDrink = useSelector(state => {
        return state.favoriteDrinks.currentDrink
    })

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