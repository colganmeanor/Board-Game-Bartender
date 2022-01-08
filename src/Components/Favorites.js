// import React from 'react'
// import { useSelector } from 'react-redux'
// import '../Styles/Favorites.css'


// const Favorites = () => {

//     const games = useSelector(state => state.favoriteGames)

//     const drinks = useSelector(state => state.favoriteDrinks)

//     const gameObjects = games.map(game => {
//         return (
//             <div>
//                 <h3>{game.name}</h3>
//                 <img src={game.image_url}/>
//             </div>
//         )
//     })

//     const drinkObjects = drinks.map(drink => {
//         return (
//             <div>
//                 <h3>{drink.name}</h3>
//                 <img src={drinks.strDrinkThumb}/>
//             </div>
//         )
//     })

//     return(
//         <section>
//             <div>
//                 {gameObjects}
//             </div>
//             <div>
//                 {drinkObjects}
//             </div>
//         </section>
//     )
// }

// export default Favorites