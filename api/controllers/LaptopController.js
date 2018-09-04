/**
 * LaptopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  items: async function(req, res){
  	let item = {
  		name : req.body.name,
  		price: req.body.price,
  		quantity: req.body.quantity
  	}
  	
  	await Laptop.create({
  		name : req.body.name,
  		price: req.body.price,
  		quantity: req.body.quantity
  	});

  	
  		sails.log(error)
  		res.json(error)

  	  	// res.status(201);

	}

}