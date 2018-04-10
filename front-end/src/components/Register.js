import React, { Component } from 'react';
import './Login.css';
import facebook from '../images/facebook.png';
import google from '../images/google.png';

class Register extends Component{
	render(){
		return(
			<div className="LogInFBGOOG">
				<h1>Register In With</h1>
				<div className="googleface">
					<img className="facebook2" src={facebook}></img>
					<img className="google" src={google}></img>
				</div>
				<div className="email">
					<h3>Or</h3>
					<div>
						<label>
							<h4>Email:</h4>
							<input type="email" name="" />
						</label>
					</div>
					<div>
						<label>
							<h4>User Name:</h4>
							<input type="text" name="" />
						</label>
					</div>
					<div>
						<label>
							<h4>Password:</h4>
							<input type="password" name="" />
						</label>
					</div>
					<button className="submit">Register</button>
				</div>
			</div>
		)
	}
}

export default Register;