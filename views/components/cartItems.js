import React, {Component} from 'react';
import {Router, Link} from 'react-router-dom';
import {Col, Row, Glyphicon} from 'react-bootstrap';

class CartItems extends Component{ 
	render(){

		return(
			<Row>
		<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
				<Col xs={4}>
					<img src={this.props.item.image}/>
				</Col>
				<Col xs={4}>
					<h4>{this.props.item.name}</h4>
				</Col>
				<Col xs={2}>
					<h4>{this.props.item.price}</h4>
				</Col>
				<Col xs={2}>
					<input type='number'/>
				</Col>
			</Row>	
		)
}
}
export default CartItems;