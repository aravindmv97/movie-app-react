import React, { Component } from 'react';

import TopRated from './TopRated/TopRated.js';
import Favourites from './Favourites/Favourites.js'; 

import './Home.css';

class Home extends Component {
	render(){
		return(
			<div className="homeComponent">
				<TopRated />
				<Favourites />
			</div>
		);
	}
}

export default Home;	