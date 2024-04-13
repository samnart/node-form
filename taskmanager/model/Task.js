const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'must provide name'],
    maxlength: [25, 'too many characters'],
  },
  completed: {
    default: false,
    type: Boolean,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
