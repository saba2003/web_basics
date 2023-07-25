const { Router } = require('express')
const User = require('../models/user_model')
const unAuthControl = require('../middleware/unAuth_control')
const router = Router()

router.get('/', unAuthControl, async  (request, response) => {

    const users = await User.find().lean()

    response.render('home', {
        tab_title: "HOME",
        users: users
    })

})

module.exports = router