/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  // 'GET /':                   { view: 'index' },
  // 'GET /cart':           {view: 'components/cart'},
  // 'GET /login':           {view: 'components/login'},
  // 'GET /register':           {view: 'components/register'},
  // 'GET /shop':           {view: 'components/shop'},
  '/signup': 'UserController.register',
  '/signin': 'UserController.signin',
  'POST /order' : 'LaptopController.createItem'
};
