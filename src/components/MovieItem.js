import React from 'react'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {connect} from 'react-redux'
import {addFavorite, removeFavorite} from '../actions/favorite'

const urlComponent="https://image.tmdb.org/t/p/w1280/"

const cardStyle={
    width: '18rem'
}



class MovieItem extends React.Component {
    constructor() {
        super()
        this.state={
            favorite: false
        }
    }

    handleFavorite=(e)=> {
        this.setState({
            favorite: !this.state.favorite
        }, ()=> {
            if(this.state.favorite) {
                this.props.dispatch(addFavorite(this.props.movie))
            } else {
                this.props.dispatch(removeFavorite(this.props.movie.id))
            }
        })
        

    }

    displayFavorite() {
        if(this.state.favorite) {
            return <FontAwesomeIcon icon={faHeart} color="red" onClick={this.handleFavorite}></FontAwesomeIcon>
        } else {
            return <FontAwesomeIcon icon={faHeart} color="black" onClick={this.handleFavorite}></FontAwesomeIcon>
        }
    }

    render() {
    return (
        <div className="col-sm-6 col-md-4">
                <div className="card" style={cardStyle}>
                <img src={urlComponent+this.props.movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>
                    <p className="card-text">{this.props.movie.overview}</p>
                    <p className="card-text">Release Date - {this.props.movie.release_date}</p>
                    <p className="card-text">Ratings - <span className="badge badge-primary">{this.props.movie.vote_average}</span> </p>
                    <p className="card-text">{this.displayFavorite()}</p>
                </div>
                </div>
                </div>
    )

}
}

const mapStateToProps=(state)=> {
    return {
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(MovieItem)