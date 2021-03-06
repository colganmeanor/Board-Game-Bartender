const apiCalls = {

    getGameData: () => {
        return fetch('https://api.boardgameatlas.com/api/search?limit=25&pretty=true&client_id=YWBLPm0lyY')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    getSpecificGame: (gameId) => {
        return fetch(`https://api.boardgameatlas.com/api/search?ids=${gameId}&pretty=true&client_id=YWBLPm0lyY`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    getDrinkByType: (type) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    getSpecificDrink: (drinkId) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    }
}

export default apiCalls