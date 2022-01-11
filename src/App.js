
import React,  { useEffect, useState } from 'react'
import './App.css'
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

  const [error, setError] = useState('')

  const games = useSelector(state => state.boardGame.allGamesData.games)

  useEffect(() => {
    apiCalls.getGameData()
      .then(data => {
        if (data.games) {
          dispatch(loadGameData(data))
        } else {
          setError(data.message)
        }
      })
  }, [])

  return (
    <div>
        <Header />
      <main className='landing-page'>
        {error ?
          <p className='error-message'>Sorry, there's been an error: '{error}'</p> :
          <Routes>
            <Route path='/' element={games ? <PairingForm /> : <Loading />} />
            <Route path='/:gameId/:drinkId' element={<PairedPage />} />
            {/* <Route path='/favorites' element={<Favorites />} /> */}
          </Routes>
        }
        </main>
    </div>
  );
}

export default App;
