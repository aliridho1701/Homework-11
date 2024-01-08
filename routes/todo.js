const express = require('express')
const router = express.Router()
const todosControllers = require ('../controllers/todoControllers')

router.get('/', todosControllers.getAll)
router.get('/:id', todosControllers.getById)
router.post('/', todosControllers.create)
router.delete('/:id', todosControllers.delete)

module.exports = router