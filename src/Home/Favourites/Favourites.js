import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import axios from 'axios';

import './Favourites.css';

class Favourites extends Component {
	constructor(props){
		super(props);
		this.state = {
			movieNames: []
		};
	}

	getFavouriteMovies = (e) => {
		axios.get('https://api.themoviedb.org/3/account/5b4c66a49251417d20035e93/favorite/movies', {
			params: {
				api_key:'52ee9d5c12f1a8dba9590b47ffe68904',
				session_id:'2b51933fd0191a2bd09198d5336328e17dcf391c',
				language:'en-US',
				sort_by:'created_at.asc',
				page: 1
			}
		})
		.then(function (response) {
			this.setState({movieNames: (response.data.results).splice(0, 4) });
		}.bind(this))
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
	} 

	componentWillMount() {
		this.getFavouriteMovies();
	}

	render(){
		return(
			<div>
				<div className="favouritesTitle">
					<h4>Favourites</h4>
				</div>	
				<div className="favouritesContainer" >
					<Container>
						<Row>
							{
								this.state.movieNames.map((movie, index)=>
									<Col key={index} sm={3}>
							   		<div className="movieCards" >
							          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt="img"  />
							        	<div className="movieDetails" >
								        	<h5><b>{movie.vote_average}</b> <small>/10</small>  |  {movie.title}</h5>
							        	</div>
							      </div>
							    </Col>
								)
							}	
						</Row>
					</Container>	
				</div>
			</div>		
			);
	}
}

export default Favourites;