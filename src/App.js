
import React,  { useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { loadDrinkData } from './redux/actions/liquorSearch.js'

const App = () => {
  const dispatch = useDispatch()
  
  const getData = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(res => res.json())
        .then(data => console.log(data))
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>we are awesome</h1>
    </div>
  );
}

export default App;
