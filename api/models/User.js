/**
 * User.js
 *
 * A user who can log in to this application.
 */
const bcrypt = require('bcrypt-nodejs');

module.exports = {

  datastore: 'someMongodb',

  attributes: {

    firstName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 30,
      example: 'Lisa Microwave van der Jenny',
    },

    lastName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name',
      maxLength: 30,
      example: 'Lisa Microwave van der Jenny',
    },

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 50,
      example: 'jessica@yahoo.com',
    },

    address: {
      type: 'string',
      // required: true
    },

    phone: {
      type: 'number',
      // required: true,
    },

    password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      minLength: 6,
      example: '2$28a8eabna301089103-13948134nad',
    },

    order: {
      collection: 'laptop',
      via: 'owner',
    },

  },
  beforeCreate(user, cb) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) {
          console.log(err);
        }else {
          user.password = hash;
        }
        cb();
      });
    });
  },

};
