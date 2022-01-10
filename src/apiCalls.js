const apiCalls = {

    getGameData: () => {
        return fetch('https://api.boardgameatlas.com/api/search?limit=100&pretty=true&client_id=YWBLPm0lyY')
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Server is down, try again later!')
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
                    throw new Error('Server is down, try again later!')
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
                    throw new Error('Server is down, try again later!')
                }
            })
            .catch(err => err)
    }
}

export default apiCalls