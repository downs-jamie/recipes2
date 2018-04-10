import React, { Component } from 'react';
import './Login.css';
import facebook from '../images/facebook.png';
import google from '../images/google.png';

class LogIn extends Component{
	render(){
		return(
			<div className="LogInFBGOOG">
				<h1>Log In With</h1>
				<div className="googleface">
					<img onclick="" className="facebook2" src={facebook}></img>
					<img onclick="" className="google" src={google}></img>
				</div>
				<div className="email">
					<label>
						Email:
						<input type="email" name="" />
					</label>
				</div>
			</div>
		)
	}
}

export default LogIn;