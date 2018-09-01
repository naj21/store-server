import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Col, Row, Button} from 'react-bootstrap';


//actions
import {selectLaptop} from '../actions/index';

//components
import CartItems from './cartItems'

//reucers
import '../reducers/store'

const laptops = [];
var amount;
class Cart extends Component{
	constructor(props){
		super(props);
		this.state = {
			cart: laptops
		}	

		this.handleOrder = this.handleOrder.bind(this);
	}

	handleOrder(){

	}

	componentWillMount(item){
	if (!this.props.cartLaptops) {
		return null
		}
		this.list(this.props.cartLaptops)
	}

	list(item){
		laptops.push(item);
		var laptop = [];
		for(let i=0; i<laptops.length; i++){
			if(laptop.indexOf(laptops[i]) == -1){
				laptop.push(laptops[i])
			}
		}
		this.setState(
		{
			cartItems : laptop}
			)
	}

	render(){
		var {cart} = this.state;
		cart = cart.map((item, index)=>{
			return(
				<CartItems item={item} key={index}/>
			)
		})
		return(
			<div className='top'>
				<link rel='stylesheet' type='text/css' href='/styles/bootstrap.min.css'/>
				<link rel='stylesheet' type='text/css' href='/styles/cart.css'/>
				<h2>Shopping Cart</h2>
				<Row>
					<Col xs={12} sm={8} className='cartDetails'>
						<Row>
							<Col xs={4}>
							</Col>
							<Col xs={4}>
								<h4>Name</h4>
							</Col>
							<Col xs={2}>
								<h4>Price</h4>
							</Col>
							<Col xs={2}>
								<h4>Quantity</h4>
							</Col>
						</Row>
						{cart}				
					</Col>
					<Col xs={12} sm={4} className='cartTotal'>
						<h4>Cart Total</h4>
						<Row>
							<Col xs={8} className='total'>Total</Col>
							<Col xs={4}>{amount}</Col>
							<Col xs={12} className='submit'><Button onClick = {this.handleOrder}>Checkout</Button></Col>
						</Row>
					</Col>
				</Row>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
	cartLaptops: state.cartLaptops
	}
}

export default connect(mapStateToProps)(Cart);