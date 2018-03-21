import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
	render(){
		return (
			<div>
				<MoviePoster />
				<h1>Hello this is a movie</h1>
			</div>
		)
	}
}

class MoviePoster extends Component{
	render(){
		return (
			<img src="data:image/jpeg;base64,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" />
		)
	}
}


export default Movie;