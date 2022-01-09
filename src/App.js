
import React,  { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { loadDrinkData } from './redux/actions/liquorSearch.js'
import { loadGameData } from './redux/actions/boardGame'
import PairingForm from './Components/PairingForm';
import PairedPage from './Components/PairedPage';
import Header from './Components/Header'

const App = () => {
  const dispatch = useDispatch()
  
  const games = useSelector(state => state.boardGame.allGamesData.games)
  
  const getDrinkData = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res => res.json())
  }

  const getGameData = () => {
    return fetch('https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=JLBr5npPhV')
      .then(res => res.json())
  }
    
  const getData = () => {
    Promise.all([getDrinkData(), getGameData()])
      .then(data => {
        dispatch(loadDrinkData(data[0]))
        dispatch(loadGameData(data[1]))
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
        <Header />
        
        <main className='landing-page'>
          {games ? <PairingForm /> : <p>Loading</p>}
          <PairedPage />
        </main>
      
    </div>
  );
}

export default App;
