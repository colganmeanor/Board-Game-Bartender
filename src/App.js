
import React,  { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { loadGameData } from './redux/actions/boardGame'
import PairingForm from './Components/PairingForm'
import PairedPage from './Components/PairedPage'
import Header from './Components/Header'
import Loading from './Components/Loading'
import { Routes, Route } from 'react-router-dom'
import apiCalls from './apiCalls'
import Favorites from './Components/Favorites'


const App = () => {
  const dispatch = useDispatch()
  const games = useSelector(state => state.boardGame.allGamesData.games)

  useEffect(() => {
    apiCalls.getGameData()
      .then(data => dispatch(loadGameData(data)))
  }, [])

  return (
    <div>
        <Header />
        <main className='landing-page'>
          <Routes>
            <Route path='/' element={games ? <PairingForm /> : <Loading />}/>
            <Route path='/:gameId/:drinkId' element={<PairedPage />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
