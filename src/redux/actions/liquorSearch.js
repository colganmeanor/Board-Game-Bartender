export const loadDrinkData = (drinks) => {
    return {
        type: 'LOAD_DRINK_DATA',
        payload: drinks
    }
}