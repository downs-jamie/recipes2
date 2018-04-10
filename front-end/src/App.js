import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SlickSlider from './components/SlickSlider';
import Search from './components/Search';
import LogIn from './components/LogIn'
import NavBar from './components/NavBar';
import Register from './components/Register';
import Carousel from './components/Carousel';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state = ({
			ingredient: ''
		})
	}

	searchTerm(ingredient){
		console.log('searchTerm: ', ingredient)
		this.setState({
			ingredient: ingredient
		})

	}


	render() {
	return (
		<Router>
        	<div className="App">
          		<NavBar ingredientSearch = {this.searchTerm.bind(this)} />
          		<div className="app-body">
            		<Route exact path="/" component={Carousel} />
            		<div className="container-fluid">
	              		<Route exact path="/allrecipes" component={Search} />
	              		<Route exact path="/login" component={LogIn} />
	              		<Route exact path="/register" component={Register} />
            		</div>
         		</div>
        	</div>
      </Router>
	);
	}
}


export default App;