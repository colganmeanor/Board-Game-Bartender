
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


const App = () => {
  const dispatch = useDispatch()
  const games = useSelector(state => state.boardGame.allGamesData.games)

  useEffect(() => {
    apiCalls.getGameData()
      .then(data => dispatch(loadGameData(data)))
  }, [])

  return (
    <div>
<<<<<<< HEAD
        <Header />
        <main className='landing-page'>
          <Routes>
            <Route path='/' element={games ? <PairingForm /> : <Loading />}/>
            <Route path='/:gameId/:drinkId' element={<PairedPage />} />
            {/* <Route path='/favorites' element={<Favorites />} /> */}
          </Routes>
        </main>
=======
      <header data-cy='header'>
        <h1>Board Game Bartender</h1>
      </header>
      {games ? <PairingForm /> : <p>Loading</p>}
>>>>>>> 1b6ec41 (Fix tests' class and id identifiers to instead use data-cy)
    </div>
  );
}

export default App;
