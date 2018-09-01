import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';
//import 'bootstrap3/dist/css/bootstrap.css';

//styles
//import '../../assets/styles/sideNav.css'

var number=0;
const SideNav = () => {
	
	return(
			<div className='sideNav'>
	<link rel='stylesheet' type='text/css' href='/styles/bootstrap.css'/>
	<link rel='stylesheet' type='text/css' href='/styles/sideNav.css'/>
				<h1 className='logo'><Link to='/'>Rayn</Link></h1>
				<ul className='links'>
					<li><Link to='/register'>REGISTER</Link></li>
					<li><Link to='/shop'>SHOP<Glyphicon glyph='caret'/></Link></li>
					<li><Link to='/cart'>CART ({number})</Link></li>
				</ul>
			</div>
		)
}  

export default SideNav;