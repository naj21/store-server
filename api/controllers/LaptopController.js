/**
 * LaptopController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  async createItem(req, res) {
    try {
      const item = await Laptop.create(req.body).fetch();

      res.status(201).json({ sucess: true, message: 'iteam created', data: item });
    } catch (error) {
      res.status(400).json({ sucess: false, message: 'error creating item', error });
    }
  },

};
