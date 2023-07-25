const { Router, response, request } = require('express')
const router = Router()
const authControl = require('../middleware/auth_control')

const Todo = require('../models/todo_model')

router.get('/create', authControl, (request, response) => {

    response.render('create', {
        tab_title: "CREATE",
        is_create: true
    })
})

router.post('/create', authControl, async (request, response) =>{
    const new_todo = await new Todo({
        user: request.session.user._id,
        title: request.body.title
    })

    await new_todo.save()

    response.redirect("/")

})

module.exports = router