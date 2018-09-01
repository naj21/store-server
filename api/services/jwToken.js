
const jwt = require('jsonwebtoken');
//const tokenSecret = 'secretssecet';
//const config = '../config/env/';
const tokenSecret = 'mysecret';

module.exports = {
	issue : function(payload){
		return jwt.sign(
			payload,
			tokenSecret,
		)
	},

	verify : function(token, cb){
		return jwt.verify(
			token,
			tokenSecret,
			{},
			cb
		)
	}
}