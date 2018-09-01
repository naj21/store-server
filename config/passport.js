const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
//const config = require('./session');

passport.use(new LocalStrategy({
	usernameField: 'emailAddress',
	passportField: 'password'
},function(emailAddress, password, done){
	User.findOne({
		emailAddress: emailAddress
	}, function(err, user){
		if(err){
			return done(err);
		}
		if(!user){
			return done(null, false, {message: 'Credentials not found'})
		}
		bcrypt.compare(password, user.password, function(err, res){
			if(!res){

				return done(null, false, ({message: 'Credentials not found'}))
			}
		
		return done(null, user, {message: 'Login Successful'})
		}
		)
	})
}))