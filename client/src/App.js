import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    console.log('savedList '+savedList);
    const movieExist = savedList.some(eachMovie => eachMovie.title === movie.title)
    console.log('movieExist '+movieExist)
    if(!movieExist){
    savedList.push(movie);
    this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path='/' component={MovieList} />
        <Route 
        path='/movies/:id' 
        render={props => (
        <Movie {...props} addToSavedList={this.addToSavedList}/>)} />
        {/* <Route path='/movies/:id' component={Movie} /> */}
      </div>
    );
  }
}
