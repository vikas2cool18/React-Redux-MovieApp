export const addFavorite=(movies)=> {
    return {
        type: 'ADD_FAVORITE',
        payload: movies
    }
}

export const removeFavorite=(id)=> {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}