import React, {Component} from 'react';
import {StaticRouter as Router, Link, Route} from 'react-router-dom';
import {Button, Row, Col, Grid} from 'react-bootstrap';
//import 'bootstrap3/dist/css/bootstrap.css';


//images
 const siteImage = '/images/site-image.jpg';
 const dress = '/images/dress.jpg';
 const hairAccesory = '/images/hair-accessory.jpg';

//styles
//import '../../assets/styles/home.css';


const Home = ()=>{

	return(
		<Grid fluid className='home'>

	<link rel='stylesheet' type='text/css' href='/styles/bootstrap.css'/>
	<link rel='stylesheet' type='text/css' href='/styles/home.css'/>
			<Row>
				<Col xs={12} className='siteImage'>
					<img src={siteImage}/>
				</Col>
			</Row>
			<Router>
			<Row className='category'>
				<Col xs={12} sm={6} className='category1'>
					<h3>Dresses</h3>
					<Link to=''><img src={dress}/></Link>
				</Col>
				<Col xs={12} sm={6} className='category2'>
					<h3>Hair Accessories</h3>
					<Link to=''><img src={hairAccesory}/></Link>
				</Col>
			</Row>
			</Router>
		</Grid>
		)
}

export default Home;