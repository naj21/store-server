/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const jwToken = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const tokenSecret = 'mysecret';


const token = (clame) => {
  const jwt = jwToken.sign(clame, tokenSecret);
  return jwt;
};

const comfirmPassword= (password, hash) => {
  bcrypt.compare()
}

module.exports = {
  async signin(req, res) {
    const { emailAddress, password } = req.body;
    const user = await User.find({ emailAddress });
    if (user.password === )
    res.json(user);
  },

  async register(req, res) {
    try {
      const newuser = await User.findOrCreate({ emailAddress: req.body.emailAddress }, req.body);
      res.status(201).json({
        success: true, message: 'user created', data: newuser, token: token({ id: newuser._id }),
      });
    } catch (error) {
      console.log(error);
      res.status(400).send('user already exists');
    }
  },
};
