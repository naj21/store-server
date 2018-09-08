/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');
const jwToken = require('jsonwebtoken');
tokenSecret = 'mysecret'

module.exports = {
	signin: async function(req, res){
		passport.authenticate('local', {session: false}, function(err, user, info){
			if(err || !user){
				res.status(403);
				return res.send({message: info.message});
			}

			const token = jwToken.sign(
				user,
				tokenSecret
				);
			return res.json({user, token, message: info.message});

		}) (req, res)
	},

	register: function(req, res){
		let details = {
			emailAddress : req.body.emailAddress,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			address: req.body.address,
			phone : req.body.phone,
			password : req.body.password
		}
	
		User.findOrCreate({emailAddress: details.emailAddress}, details)
		.exec(async(err, userExists, createUser)=>{
			if(err){
				res.status(403);
				return res.send(err);
			}
			if(createUser){

				return res.send({
					message:'Created Successfully', type:'success'
				})
			}else{
				return res.send(
					{message:'User already exists', type:'error'});
			}
		})
	},
}  


