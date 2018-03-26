import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {

	state = {
		
	}

	componentDidMount(){
		fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(potato => potato.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))
	}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  } 
}

export default App;
