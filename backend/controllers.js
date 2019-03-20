const { Product } = require('./models');

module.exports = {

  getAllProducts: (req, res) => {
    Product.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getProductById: (req, res) => {
    const ID = req.params.id;
    Product.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addProduct: (req, res) => {
    const DATA = req.body;
    console.log(">>>>> ", DATA)
    Product.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateProduct: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Product.updateOne({ _id: ID }, DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteProduct: (req, res) => {
    const ID = req.params.id;
    Product.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}