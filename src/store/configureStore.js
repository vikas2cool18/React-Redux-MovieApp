import {createStore, combineReducers} from 'redux'
import moviesReducer from '../reducers/moviesReducer'
import favoriteReducer from '../reducers/favoriteReducer'

const configureStore=()=> {
    const store=createStore(combineReducers({
        movies: moviesReducer,
        favorite: favoriteReducer
    }))
    return store
}

export default configureStore