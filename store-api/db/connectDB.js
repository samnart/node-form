const mongoose = require('mongoose')

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB is connected...`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
