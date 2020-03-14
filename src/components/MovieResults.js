import React from 'react'
import Search from './Search'
import {connect} from 'react-redux'
import MovieItem from './MovieItem'
import FavoriteMovieList from './FavoriteMovieList'
import {Link} from 'react-router-dom'

function MovieResults(props) {
    return (
        <div>
            <h1>Favorite Movie Results</h1>
            <FavoriteMovieList />
            <hr />
            <h1>Movie Results</h1>
            <Search />
            {props.movies.map(movieItem=> {
                return <MovieItem key = {movieItem.id} movie={movieItem} />
            })}
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        movies : state.movies
    }
}

export default connect(mapStateToProps)(MovieResults)