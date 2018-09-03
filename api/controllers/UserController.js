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
	
		User.findOrCreate({emailAddress: details.emailAddress}, details)
		.exec(async(err, userExists, createUser)=>{
			if(err){
				res.status(403);
				console.log(err)
				return res.send(err);
			}
			if(createUser){
				// var twilio = require('twilio');
				// var accountSid = 'ACf31ec4d84cb67a260277c41dd5c4be7c';
				// var authToken = 'e392928a870e85bc94825d546f867be3'
				// var client = new twilio(accountSid, authToken);

				// client.messages.create({
				// 	body: `Hello, ${createUser.firstName}, from NAJ`,
				// 	to: createUser.phone,
				// 	from: '+15867880990'
				// })
				// .then(message=> console.log('Twilio - ', message.sid));


				// const AWS = require('aws-sdk');

				// AWS.config.update({
				// 	acesssKeyId: 'AKIAIP6DUUXB7SUIRZVQ',
				// 	secreteKeyId: '9/NyYd1G5gKRBxcGCG+qs0RPlR7lkDsHhP+hb0CX',
				// 	region: 'us-east-1'
				// });

				// const ses = new AWS.SES({apiVersion: '2010-12-01'});
				// const params = {
				// 	Destination: {
				// 		ToAddresses: ['jesax013@gmail.com']
				// 	},
				// 	ConfigurationSetName: 'Feedback',
				// 	Message: {
				// 		Body: {
				// 			Html: {
				// 				Charset: 'UTF-8',
				// 				Data: '<html><body><h1>Hello Jessica</h1></body></html>'
				// 			},
				// 			Text: {
				// 				Charset: 'UTF-8',
				// 				Data: 'Hello Jessica Sample description'
				// 			}
				// 		},
				// 		Subject: {
				// 			Charset: 'UTF-8',
				// 			Data: 'Order Confirmation'
				// 		}
				// 	},
				// 	Source: 'jesax013@gmail.com'
				// }

				// const sendEmail = ses.sendEmail(params).promise();

				// sendEmail
				// 	.then(data => {
				// 		console.log('Email submitted to SES', data);
				// 	})
				// 	.catch(error => {
				// 		console.log(error)
				// 	});	

				return res.send(
					'Success'
					//jwToken.issue(createUser)
				)
			}else{
				return res.send('User already exists');
			}
		})
	},

	signout: (req, res)=>{
		req.logout();
	}
}  


