import React, {Component} from 'react';
import {StaticRouter as Router, Link, Route} from 'react-router-dom';
import {Row, Col, Form, Button, FormGroup, FormFeedback, FormControl, InputGroup} from 'react-bootstrap';

class Register extends Component{
	constructor(props){
		super(props);
		
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleRegister(e){
		e.preventDefault();

		fetch('/signup',{
			method: 'POST',
			body: {
				fname: this.refs.fname.value,
				lnmae: this.refs.lname.value,
				mail: this.refs.mail.value,
				country: this.refs.country.value,
				state: this.refs.state.value,
				address: this.refs.adrress.value,
				phone: this.refs.phone.value,
				password: this.refs.pword.value
			}
		})
	}

	render(){
		return(
			<Router>
			<div className='top'>
				<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
				<link rel='stylesheet' type='text/css' href='/styles/register.css'/>
				<Form action='/register' method='POST' className='login'>
					<legend>Register</legend>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>First Name</InputGroup.Addon>
							<FormControl type='text' ref='fname' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Last Name</InputGroup.Addon>
							<FormControl type='text' ref='lname' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>@</InputGroup.Addon>
							<FormControl type='text' ref='mail' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Country</InputGroup.Addon>
							<FormControl type='text' ref='country'required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>State</InputGroup.Addon>
							<FormControl type='text' ref='state' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Address</InputGroup.Addon>
							<FormControl type='text' ref='address' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Phone</InputGroup.Addon>
							<FormControl type='text' ref='phone' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Password</InputGroup.Addon>
							<FormControl type='password' ref='pword' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup>
							<InputGroup.Addon>Confirm Password</InputGroup.Addon>
							<FormControl type='password' ref='pword2' required/>
						</InputGroup>
					</FormGroup>
					<FormGroup>
						<InputGroup className='submit'>
							<FormControl type='submit' value='Register' onClick={this.handleRegister} />
							<Link to='/login'>Already a member?</Link>	
						</InputGroup>
					</FormGroup>
				</Form>
			</div>
			</Router>
		)
		// contextTypes: {
		// 	context: PropTypes.object
		// }
	}

}

export default Register;