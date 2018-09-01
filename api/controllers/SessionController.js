/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	
	new: function(req, res){
		var dat = new Date();
		var news = new Date(dat.getTime()+60000)
		req.session.cookie.expires = news
		req.session.authenticated= true;
		console.log(req.session);
	}
};

