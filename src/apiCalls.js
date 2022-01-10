const apiCalls = {

    getGameData: () => {
        return fetch('https://api.boardgameatlas.com/api/search?limit=100&pretty=true&client_id=YWBLPm0lyY')
            .then(res => res.json())
    },

    getDrinkByType: (type) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
            .then(res => res.json())
    },

    getSpecificDrink: (drinkId) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(res => res.json())
    }
}

export default apiCalls