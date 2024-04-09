const express = require("express")
const app = express()
const router = require("./routes/route")

const port = process.env.PORT || 3000

app.use(express.json()) // parse json requests

// routes
app.use("/api/v1/products", router)

// app.get
// app.post
// app.get
// app.patch / app.put
// app.delete

app.listen(port, () => {
   console.log(`App is listening on port ${port}`)
})
