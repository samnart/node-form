const Product = require('../model/Product')

const getAllProductsStatic = async (req, res) => {
  //   const products = Product.find({})
  res.status(200).json('three four five six')
}

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query
  const queryObject = {}

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }

  if (company) {
    queryObject.company = company
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$e',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|<=|>|>=|=)\b/g
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    )
    const options = ['price', 'rating']
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) }
      }
    })
  }

  let result = Product.find(queryObject)

  if (sort) {
  }
}

module.exports = { getAllProductsStatic, getAllProducts }
