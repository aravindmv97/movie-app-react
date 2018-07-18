import React, { Component } from 'react';
import axios from 'axios';
import './MovieDetailsPage.css';

class MovieDetailsPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			movieId: this.props.location.state.id,
			movieDetails: [],
			movieVideoDetails: []
		};
	}

	getMovieDetails = (e) => {
		axios.get('https://api.themoviedb.org/3/movie/' + this.state.movieId , {
			params: {
				api_key:'52ee9d5c12f1a8dba9590b47ffe68904',
				language:'en-US'
			}
		})
		.then(function (response) {
			console.log(response.data);
			this.setState({movieDetails: response.data });
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});

		axios.get('https://api.themoviedb.org/3/movie/'+ this.state.movieId +'/videos' + this.state.movieId , {
			params: {
				api_key:'52ee9d5c12f1a8dba9590b47ffe68904',
				language:'en-US'
			}
		})
		.then(function (response) {
			console.log(response.data);
			this.setState({movieVideoDetails: response.data });
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});

	}

	componentWillMount(){
		this.getMovieDetails(this.state.movieId);
	}

	render(){
		return(
			<div>

			</div>
		);
	}
}


export default MovieDetailsPage;