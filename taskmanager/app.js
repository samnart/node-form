const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// app.get("/", (req, res) => {
//    res.send("is it working now?")
// })

// app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks/', router)

app.use(errorHandlerMiddleware)
app.use(notFound)

async function start() {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
