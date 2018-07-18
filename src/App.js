import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Common/Header.js';
import HomePage from './Home/Home.js';
import MovieDetailsPage from './MovieDetails/MovieDetailsPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
      	 <Router>
		    <div>
      		<Header/>
		      <ul>
		        <li>
		          <Link to="/">Home</Link>
		        </li>
		      </ul>

		      <hr />

		      <Route exact path="/" component={HomePage} />
		      <Route path="/movieDetails" component={MovieDetailsPage} />
		    </div>
		  </Router>
      </div>	
      );
  }
}

export default App;
