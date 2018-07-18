import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import axios from 'axios';
import { Collapse } from 'reactstrap';
import { Link } from "react-router-dom";

import  './Header.css';

class Header extends Component{
	constructor () {
		super()
		this.state = {
			collapse: false,
			searchValue: '',
			list: []
		}
	}

	getMovieNames = (e) => {	
		if ((this.state.searchValue.length) - 1) {
			this.setState({ collapse: true });
			axios.get('https://api.themoviedb.org/3/search/movie', {
				params: {
					api_key:'52ee9d5c12f1a8dba9590b47ffe68904',
					language:'en-US',
					query:e,
					page: 1,
					include_adult:false
				}
			})
			.then(function (response) {
				this.setState({list: response.data.results});
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
		}
		else
		{
			this.setState({ collapse: false });
		}
	}

	handleSearch = (e) => {
		this.setState({ searchValue: e.target.value });
		this.state.searchValue.length <=2 ? this.setState({ collapse: false }) : this.setState({ collapse: true });
		if(this.state.searchValue.length >= 2)
		{
			this.getMovieNames(this.state.searchValue);
		}
	}

	closeSuggest = (e) => {
		this.setState({ collapse: false });
	}

	handleClick = (e) => {
   	    this.setState({
	      searchValue: e.currentTarget.dataset.id,
	      collapse: false
	    });
	  }

	render(){
		return(
			<div>
				<div className="search">
				<Row>
					<Col sm={4}>
						<div className="header">
							<h1>Movieflix</h1>
						</div>
					</Col>
					<Col sm={4}>
						
						<h4>Search movies...</h4>
						<input type="text" className="form-control" style={searchBar} onChange={this.handleSearch} value={this.state.searchValue} />
						<Collapse isOpen={this.state.collapse} >
						<ul className="suggestions">
						{
							this.state.list.slice(0, 10).map((movie, index) =>
							 		<li  key={index} className="list" onClick={this.handleClick} data-id={movie.title} >
							 		  <Link to={{
						     			pathname:'/movieDetails',
						     			state:{id:movie.id}
						     		}} >{movie.title} </Link>
							 		</li>
							)
						}
						</ul>
						</Collapse>
					</Col>
					<Col sm={4}>
						
					</Col>
				</Row>					
				</div>
			</div>
			);
	}	
}

const searchBar ={
	'width' : '400px'
}


export default Header;
