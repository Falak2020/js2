const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const todoModel = require('../models/todos/todoModel');
const auth = require('../authentication/auth')

router.get('/', todoModel.getTodos);
router.get('/:id', todoModel.getOneTodo);

router.post('/new',auth.verifyToken, todoModel.saveTodo);

router.patch('/:id',auth.verifyToken, todoModel.updateTodo);

router.delete('/:id',auth.verifyToken, todoModel.deleteTodo);

module.exports = router;
