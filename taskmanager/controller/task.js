const Task = require('../model/Task')

const getAllTask = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ task })
  } catch (error) {
    res.status(404).json({ error: error })
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
  } catch (error) {
    res.status(201).json({ error: error })
  }
}

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    res.status(200).json({ task })
  } catch (error) {
    res.status(201).json({ error: error })
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ task })
  } catch (error) {
    res.status(201).json({ error: error })
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    res.status(200).json({ task })
  } catch (error) {
    res.status(201).json({ error: error })
  }
}

module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
