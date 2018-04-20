// import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// import smoothies from '../smoothie-recipes.jpg';
// const API = 'http://localhost:3002/login';

// class LogIn extends Component{
//     constructor(){
//         super();
//         this.state = ({
//             recipes: [],
//             message: '',
//             placeholder: 'search by ingredient'
//         })
//     }

//     handleSubmit(event){
//         event.preventDefault();
//         console.log(event.target.name)
//         const formData = new FormData(event.target);
//         console.log(formData)
//         // axios.post(`${API}/login`, {
//         //     user: formData.get('username')
//         // })
//         // .then(user => {
//         //     console.log(user)
//         //     // props.userHandler(user.data[0].username);
//         //     // props.userIdHandler(user.data[0].id);
//         //     // return axios.get(`${API}/${user.data[0].id}`, {
//         //     //     userId: user.data[0].id
//         //     // })
//         // })
//         // .catch(err=>console.log(err))
//     }
//     render(){
//         return (
//             <Fragment>
//                 <form onSubmit={this.handleSubmit.bind(this)}>        
//                     <input name="username" type="text" placeholder="Enter Username"/>
//                     <button type="submit">Login</button>
//                 </form>
//             </Fragment>
//         );
//     }
// }

// export default LogIn;

import React, { Component, Fragment } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import "./Login.css";
import facebook from '../images/facebook.png';
import google from '../images/google.png';
// import smoothies from '../smoothie-recipes.jpg';
const API = 'http://localhost:3002';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 3;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    this.setState({ //reseting values in the field
      email: "",
      password: ""
    })
    console.log(email, password);
    axios.post(`${API}/login`,{
        email: email,
        password: password
      }).then((response)=>{
        console.log(response)
        //now, if login success we need to update navbar - remove register
        //substitute it with Favorites
        if(response.status = 200 && response.data.login === 'success'){
          console.log('do something')
        }else if(response.status = 200 && response.data.login === 'badlogin'){
          console.log('redirect user to register page')
        }else{
          console.log('something went wrong')
        }
      })
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel className="font">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder = "enter your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="font">Password</ControlLabel>
            <FormControl
              placeholder = "your password is here"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            className = "social"
            block
            bsSize="large"
            disabled={!this.validateForm()}//button is only enabled when the right info in the fields
            type="submit"
          >
            Login
          </Button>
        </form>
        <h2>Sign In with your social media account</h2>
        <div className="googleface">
          <span className="social"><img className="media" src={facebook}></img></span>
          <span className="social"><img className="media" src={google}></img></span>
        </div>
      </div>
    );
  }
}

export default Login;
