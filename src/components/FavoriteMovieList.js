import React from 'react'
import {connect} from 'react-redux'
import MovieItem from './MovieItem'

function FavoriteMovieList(props) {
    return (
        <div>
            {console.log(props.favorite)}
            {props.favorite && props.favorite.map((movieItem)=> {
                return <MovieItem key = {movieItem.id} movie={movieItem} />
            })} 
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(FavoriteMovieList)