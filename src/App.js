import React from 'react';
import Jumbotron from './components/statics/jumbotron';
import MovieResults from './components/MovieResults';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import FavoriteMovieList from './components/FavoriteMovieList';

function App() {
  return (
    <div className="container">
      <div className="row text-center">
      <Jumbotron />
      </div>
      <div className="row">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MovieResults} exact={true} />
            <Route path="/favorite" component={FavoriteMovieList}  />
          </Switch>
          <Link to="/favorite">Favorite</Link>
        </BrowserRouter>
      </div>
      {/* <div className="row">
        <MovieResults />
      </div> */}
    </div>
  );
}

export default App;
