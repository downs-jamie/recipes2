// import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
// import SlickSlider from './components/SlickSlider';
// import Search from './components/Search';
// import LogIn from './components/LogIn'
// import NavBar from './components/NavBar';
// import Register from './components/Register';
// import Carousel from './components/Carousel';
// import './App.css';

// class App extends Component {
// 	constructor(){
// 		super();
// 		this.state = ({
// 			message: '',
// 			recipes: []
// 		})
// 	}

// 	searchTerm(ingredient){
// 		console.log(ingredient); //ingredient passed from Navbar
// 		if (ingredient != 'showAll'){
// 			axios.post('http://localhost:3002/getRecipes',{
// 				data: ingredient
// 			}).then((response)=>{
// 				let message = this.state.message;
// 				if (response.data.length != 0){
// 					message = `There are ${response.data.length} results for '${ingredient}'`
// 			    }else if(response.data.length == 0){
// 			    	message = "There are no results for your search, redefine your search and try again"
// 				}else{
// 					message = ''
// 				}
// 				this.setState({
// 					recipes: response.data,
// 					message: message
// 					})
// 				})
// 		}else{// this portion gets all recipes
// 			axios.get('http://localhost:3002/getRecipes')
//       		.then((response)=>{
//         	// console.log(response.data)
//         	this.setState({
//           		recipes: response.data,
//           		message: `There are ${response.data.length} recipes in database`
//         		})
//       		})
// 		}
// 	}

// 	home(){ // this funvtion get back to initial screen
// 		console.log('home - back to Home Page')
// 		this.setState({
//       		message: ''
//         })
// 	}

// 	//we are going to use turnary operator to make code more clean
// 	render() {
// 		console.log(this.state.message) // this is our condition which dictates what renders on the screen
// 	return (
// 		<Router>
//     	<div className="App">
//       		<NavBar ingrSearch = {this.searchTerm.bind(this)} backHome = {this.home.bind(this)} />
// 	        <div className="container-fluid">
// 	        	<Route exact path="/" component={Carousel} />
// 		        <Route exact path="/login" component={LogIn} />
// 		        <Route exact path="/register" component={Register} />
// 		    </div>
//     	</div>   	
//       </Router>
// 		);
// 	}
// }


// 	constructor(){
// 		super();
// 		this.state = ({
// 			ingredient: ''
// 		})
// 	}

// 	searchTerm(ingredient){
// 		console.log('searchTerm: ', ingredient)
// 		this.setState({
// 			ingredient: ingredient
// 		})

// 	}


// 	render() {
// 	return (
// 		<Router>
//         	<div className="App">
//           		<NavBar ingredientSearch = {this.searchTerm.bind(this)} />
//           		<div className="app-body">
//             		<Route exact path="/" component={Carousel} />
//             		<div className="container-fluid">
// 	              		<Route exact path="/allrecipes" component={Search} />
// 	              		<Route exact path="/login" component={LogIn} />
// 	              		<Route exact path="/register" component={Register} />
//             		</div>
//          		</div>
//         	</div>
//       </Router>
// 	);
// 	}



// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
// import SlickSlider from './components/SlickSlider';
import Search from './components/Search';
import NavBar from './components/NavBar';
//import Carousel from './components/Carousel';
import Login from './components/LogIn';
// import Register from './components/Register';
import signUp from './components/signUp';
import './App.css';
const API = 'http://localhost:3002';

class App extends Component {

	constructor(){
		super();
		this.state = ({
			message: '',
			recipes: [],
			username: '',
			email: '',
			favorites: '',
			isAuthenticate: false
		})
	}

	searchByIngedient(e){
		e.preventDefault();
		const ingredient = document.querySelector('[name="ingredient"]').value.trim();
		if (ingredient !== ''){
			document.querySelector('form').reset(); //to reset the form
			this.props.ingrSearch(ingredient);
		}else{
			this.setState({
				placeholder: 'refine your search'
			})
		}
	}

	myFavorites(info){
		console.log('my favorites fired up ', info); //ingredient passed from Navbar
		this.setState({
			favorites: info
		})
	}


	userHandler(info){
		console.log('userHandler', info);
		this.setState({
			username: info.username,
			email: info.email,
			isAuthenticate: true
		})
	}


/*
 {(this.state.message.length === 0) ? <Carousel /> : <Search recipes={this.state.recipes} message={this.state.message} />}
*/
// <Route exact path="/" component={Carousel} />
	//we are going to use turnary operator to make code more clean
	render() {
	return (
		<Router>
    	<div className="App">
      		<NavBar ingrSearch = {this.myFavorites.bind(this)} isUser={this.state.isAuthenticate} userName={this.state.username} />
	        {(this.state.favorites) && <Search favorites = {this.state.favorites} email = {this.state.email} /> }
	        <div className="container-fluid view_area">
		        <Route path="/login" component={() => (<Login user={this.userHandler.bind(this)} />)} />
		        <Route path="/register" component={signUp} />
		        <Route path="/search" component = {() => (<Search useremail={this.state.email} />)} />
		    </div>
    	</div>   	
      </Router>
		);
	}
}


export default (App);

