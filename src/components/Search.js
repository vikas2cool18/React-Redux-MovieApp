import React from 'react'
import {Form, FormControl, FormGroup, FormLabel, Button} from 'react-bootstrap'
import './Search.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {addMovies} from '../actions/movies'

class Search extends React.Component {
    constructor() {
        super()
        this.state={
            searchText: ''
        }  
    }  

    handleChange=(e)=> {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

   handleClick=(e)=> {
       const query=this.state.searchText
       let url=`https://api.themoviedb.org/3/search/movie?api_key=09417a21e487c2c08f1a13ce506e65d5&query=${query}&page=1`
       axios.get(url)
       .then((response)=> {
           console.log(response.data.results)
           this.props.dispatch(addMovies(response.data.results))

       })
       .catch((error)=> {

       })
    }


    render() {
    return (
        <div >
            <Form inline>
                <FormGroup>
                    <FormLabel className="formLabel">Search</FormLabel>
                    <FormControl className="formControl" type="text" placeholder="wonder Woman" onChange={this.handleChange} name="searchText" value={this.state.searchText} />
                    <Button variant="success" onClick={this.handleClick}>Submit</Button>
                </FormGroup>
            </Form>
        </div>
    )
}
}

const mapStateToProps=(state)=> {
    return {
        movies: state.movies
    }
}

export default connect()(Search)