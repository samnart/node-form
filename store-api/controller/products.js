const Product = require('../model/Product')

const getAllProductsStatic = async (req, res) => {
//   const products = Product.find({})
  res.status(200).json('three four five six')
}

const getAllProducts = async (req, res) => {
//   const products = Product.find({})
  res.status(200).json('one two ')
}

module.exports = { getAllProductsStatic, getAllProducts }
