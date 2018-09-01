import React, {Component} from 'react';
import {Row, Col, Form, Button, FormGroup, FormFeedback, FormControl, InputGroup} from 'react-bootstrap'

class Login extends Component{
	constructor(props){
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(e){
		e.preventDefault();
		fetch('/signin',{ 
			method: 'POST',
			body: JSON.stringify({
				email: this.refs.mail.value,
				pword: this.refs.pword.value
			}),
			headers: {'Content-Type': 'application/json'}
		})
		.then(user=>user.json())
		.catch(console.error)
	}
	render(){		
		return(
			<div className='top '>
				<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
				<link rel='stylesheet' type='text/css' href='/styles/login.css'/>
				<Form action='/signin' method='POST' className='login'>
					<legend>Login</legend>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>@</InputGroup.Addon>
							<FormControl type='text' ref='mail' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Password</InputGroup.Addon>
							<FormControl type='password' ref='pword' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup className='submit'>
							<FormControl type='submit' value='Login' onClick={this.handleLogin} />
						</InputGroup>
					</FormGroup>
				</Form>
			</div>
		)
	}
}

export default Login;