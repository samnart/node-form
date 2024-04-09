const Product = require("../model/model")

const getAllProducts = async (req, res) => {
   try {
      const product = await Product.find({})
      res.status(200).send("here is every malafacka")
   } catch (error) {
      res.status(500).send({ error: error.message })
   }
}

const createProduct = async (req, res) => {
   try {
      const product = await Product.create(req.body)
      res.status(200).send("what should i create saf")
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

const getProduct = async (req, res) => {
   try {
      const { id: productID } = req.params
      const product = await Product.findOne({ _id: productID })
      res.status(201).send("Successful maybe")
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

const updateProduct = async (req, res) => {
   try {
      const { id: productID } = req.params
      const product = await Product.findOneAndUpdate(
         { _id: productID },
         req.body,
         {
            new: true,
            runValidators: true,
         }
      )
      res.status(200).send("yapee")
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

const deleteProduct = async (req, res) => {
   try {
      const { id: productID } = req.params
      const product = await Product.findOneAndDelete({ _id: productID })
      res.status(200).send("killed that malafacka")
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

module.exports = {
   getAllProducts,
   createProduct,
   getProduct,
   updateProduct,
   deleteProduct,
}
