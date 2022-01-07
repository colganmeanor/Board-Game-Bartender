
import React,  { useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { loadDrinkData } from './redux/actions/liquorSearch.js'
import { loadGameData } from './redux/actions/boardGame'
import PairingForm from './Components/PairingForm';

const App = () => {
  const dispatch = useDispatch()
  
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
      <h1>we are awesome</h1>
      <PairingForm />
    </div>
  );
}

export default App;
