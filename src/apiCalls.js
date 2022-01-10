const apiCalls = {

    getGameData: () => {
        return fetch('https://api.boardgameatlas.com/api/search?name=Catan&pretty=true&client_id=JLBr5npPhV')
            .then(res => res.json())
    },

    getSpecificDrink: (drinkId) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(res => res.json())
    }
}

export default apiCalls