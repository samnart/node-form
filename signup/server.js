const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('i am here homies')
})

app.listen((PORT), () => {
  console.log(`Server is listening on port ${PORT}`)
})
