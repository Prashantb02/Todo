const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    task: { type: String, require: true },
    details: { type: String, require: true }

})


const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo