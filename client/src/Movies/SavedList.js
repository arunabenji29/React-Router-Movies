import React, { Component } from 'react';
import {Route, NavLink,Link} from 'react-router-dom';
// import MovieList from './MovieList';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    
  }

  // linktoHome = (event) => {
  //   event.preventDefault();
  //   this.props.history.push('./');
  // }
  

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        
        <Link className="home-button" to='/'>Home</Link>
        {/* <div className='home-button' onClick={this.linktoHome}>Home</div> */}
       
      </div>
    );
  }
}
