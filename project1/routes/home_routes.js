const { Router } = require('express')
const router = Router()
const Todo = require('../models/todo_model')
const authControl = require('../middleware/auth_control')

router.get('/', authControl, async (request, response) => {
    const todosArray = await Todo
        .find({ user: request.session.user._id })
        .populate({
            path: 'user',
            model: 'User',
        })
        .sort({ createdAt: -1 })
        .lean()

    const completed_todos = todosArray.filter(function(todo) {
        return todo.completed === true
    })
    const active_todos = todosArray.filter(function(todo) {
        return todo.completed === false
    })

    response.render('home', {
        tab_title: "HOME",
        is_home: true,
        cTodos: completed_todos,
        aTodos: active_todos
    })
})

router.post('/todo/change_status', authControl, async (request, response) => {
    const todo = await Todo.findById(request.body.id)

    todo.completed = !!request.body.completed_status

    await todo.save()

    response.redirect('/')

})

router.post('/todo/delete_todo', authControl, async (request, response) => {
    const todo = await Todo.findByIdAndDelete(request.body.id)

    await todo

    response.redirect('/')
})

module.exports = router