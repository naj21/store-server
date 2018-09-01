import React, {Component} from 'react';
import {StaticRouter as Router, Link, Route} from 'react-router-dom';
import {Button, Row, Col, Grid} from 'react-bootstrap';
import {Provider} from 'react-redux';
import '/js/dependency/sails.io'

//components
import Home from './home';
import Login from './login';
import SideNav from './sideNav';
import Cart from './cart';
import Register from './register';
import Shop from './shop';

//reducers
import store from '../reducers/store';

const routes = [
	 {
	 path: '/',
	exact: true,
	//sidebar: ()=><div>home!</div>,
	main: ()=> <Home/>
	},
	{
	path: '/cart',
	main: ()=> <Provider store={store}><Cart/></Provider>
	},
	{
	path: '/login',
	main: ()=> <Login/>
	},
	{
	path: '/register',
	main: ()=> <Register/>
	},
	{
	path: '/shop',
	main: ()=> <Provider store={store}><Shop/></Provider>
	}
]

const Main = ()=>{
	return(
		<Router>
			<div>
			<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
			<link rel='stylesheet' type='text/css' href='/styles/main.css'/>
			<Grid fluid={true} className='main'>
				<Row>
					<Col sm={4} md={3} className='sideNav'>
						<SideNav/>
					</Col>
					<Col sm={8} md={9}>
							<div>
								{routes.map((route, index)=>(
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										component={route.main}
									/>
								))}
							</div>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className='footer'>
						<h3>Rayn</h3>
						<p>Copyright@2018 by NAJ</p>
					</Col>
				</Row>
				</Grid>
				</div>	
			</Router>
		
		)
}

export default Main;