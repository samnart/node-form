const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
require('dotenv').config()
const router = require('./routes/product')





const PORT = process.env.PORT || 3900

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products"/>Products route</a>')
})

app.use('/api/v1/products', router)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
