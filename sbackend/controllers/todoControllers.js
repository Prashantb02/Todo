const Todo = require('../models/todoSchema')

exports.getAllTodo = async (req, res) => {
    try {
        const todo = await Todo.find()
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.getSpecificTodo = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findById(id)
        
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.addTodo = async (req, res) => {
    const { task, details } = req.body
    try {
        const todo = await Todo.create({ task, details })
        res.status(200).json({ message: 'task has been created!!' })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params
    const { task, details } = req.body
    try {
        const todo = await Todo.findByIdAndUpdate(id, { task, details })
        res.status(200).json({ message: 'updated task!!' })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}


exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({ message: 'deleted task!!' })

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
