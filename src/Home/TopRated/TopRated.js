import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';

import './TopRated.css';

class TopRated extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieNames: []
		};
	}

	getTopRatedMovies = (e) => {
		axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=52ee9d5c12f1a8dba9590b47ffe68904&language=en-US', {
			params: {
				page: 1
			}
		})
		.then(function (response) {
			console.log(response.data.results);
			this.setState({movieNames: (response.data.results).splice(0, 4) });
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
	} 

	componentWillMount() {
		this.getTopRatedMovies();
	}

	render() {

		return(
			<div>
				<div className="topRatedTitle" >
					<h4>Top Rated Movies</h4>
				</div>
				<div className="topRatedContainer" >
					<Container>
						<Row>
							{
								this.state.movieNames.map((movie, index)=>
									<Col key={index} sm={3} >
							   		<div className="movieCards" >
							          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="img" />
							        	<div className="movieDetails" >
								        	<h5><b>{movie.vote_average}</b> <small>/10</small>  |  {movie.title}</h5>
							        	</div>
							      </div>
							    </Col>
								)
							}	
						</Row>
					</Container>		
					<div className="style_prevu_kit" ></div>	
				</div>
			</div>
			);
	}
}

export default TopRated;