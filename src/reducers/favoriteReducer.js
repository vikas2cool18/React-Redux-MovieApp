const initialMovie=[]

const favoriteReducer=(state=initialMovie, action)=> {
    switch(action.type) {
        case 'ADD_FAVORITE' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_FAVORITE' : {
            return state.filter(movie=> movie.id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default favoriteReducer