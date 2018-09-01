/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');
const jwToken = require('jsonwebtoken');
tokenSecret = 'mysecret'
// var bcrypt = require('bcrypt-nodejs');

module.exports = {
	signin: async function(req, res){
		// var email = req.param('mail');
		// var password = req.param('pword');

		// if(!email){
		// 	return res.badRequest(new Error('No mail specified'));
		// }

		// var mail = await User.findOne({emailAddress: email});

		// if(!mail){
		// 	res.status(403);
		// 	return res.send('Not Found');
		// }

		// bcrypt.compare(password, mail.password, function(err, res){
		// 	if(!res){
		// 		return done({message: 'Credentials not found'})
		// 	}
		// 	return done('Successful')
		// })


		passport.authenticate('local', {session: false}, function(err, user, info){
			if(err || !user){
				res.status(403);
				return res.send(info.message);
			}

			const token = jwToken.sign(
				user,
				tokenSecret
				);
			return res.json({user, token});

		}) (req, res)
	},

	register: function(req, res){
		let details = {
			emailAddress : req.body.emailAddress,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			country : req.body.country,
			password : req.body.password
		}
		// if(!emailAddress || emailAddress== ' '){
		// 	var emailError = [
		// 		{
		// 			name: 'Email Required',
		// 			message: 'Why would you want to register without an email'
		// 		}]
		// }
		// req.session.flash = { err: emailError}
		User.findOrCreate({emailAddress: details.emailAddress}, details)
		.exec(async(err, userExists, createUser)=>{
			if(err){
				res.status(403);
				console.log(err)
				return res.send(err);
			}
			if(createUser){
				//res.status(200);
				// var token = jwToken.generateToken(createUser);
				// var user = jwToken.getCleanUser(createUser)
				//return res.json(200, {user: 'Created Successfully', token: jwToken.issue({id: createUser.id})});
				return res.json(
					//user: createUser,
					jwToken.issue(createUser)
				)
			}else{
				return res.send('User already exists');
			}
		})
	},

	signout: (req, res)=>{
		req.session.destroy();
		req.logout();
		res.redirect('/login');

	},

    check: function(req, res) {
        return res.json();
    }
}  


