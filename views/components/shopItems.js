import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';
import {Button, Col, Row, Glyphicon} from 'react-bootstrap';

//components
//import Cart from './cart'

var cartItems=[];

class ShopItems extends Component{ 
	constructor(props){
	 	super(props);
	// 	this.state= {
	// 		items: cartItems
	// 	}
	this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(){
		this.props.onAdd(this.props.item);
		        console.log(this.props.item)		
	}

	render(){
		// var {items} = items;
		// items = items.map((cartItem, index)=>{
		// 	return(
		// 		<Cart items={items} key={index}/>
		// 	)
		// })
		
	return(
	<div>
		<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
		<link rel='stylesheet' type='text/css' href='/styles/shop.css'/>
	<Col sm={6} lg={4} className='items'>
		<img src={this.props.item}/>x
		<Col xs={8} className='itemName'>
			<Row>₦456</Row>
			<Row>Lenovo</Row>
		</Col>
		<Col xs={2} xsOffset={2} className='cartLink'>
			<Button onClick={this.handleAdd}><Glyphicon glyph='shopping-cart'/></Button>
		</Col>
	</Col>
	</div>
	)
}
}
export default ShopItems;