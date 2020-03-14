const initialMovie=[]

const moviesReducer=(state=initialMovie, action)=> {
    switch(action.type) {
        case 'ADD_MOVIES' : {
            return state.concat(action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default moviesReducer