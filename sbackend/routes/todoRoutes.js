const express = require('express')
const { getAllTodo, addTodo, updateTodo, deleteTodo, getSpecificTodo } = require('../controllers/todoControllers')

const router = express.Router()

router.get('/',getAllTodo)
router.get('/:id',getSpecificTodo)

router.post('/',addTodo)

router.put('/:id',updateTodo)

router.delete('/:id',deleteTodo)


module.exports = router