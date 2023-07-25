const { Router } = require('express')
const router = Router()
const User = require('../models/user_model')
const authControl = require('../middleware/auth_control')

router.get('/user/profile', authControl, (request, response) => {
    response.render('profile', {
        tab_title: "PROFILE",
        is_home: true,
    })
})

router.post('/user/profile/update', authControl, async (request, response) => {
    User.findByIdAndUpdate(request.session.user._id, request.body, {
        new: true,
        runValidators: true
    })
    .then((updated_user) => {
        request.session.user = updated_user,
        console.log(updated_user)
    })
    .catch(() => {
        console.log("FLASH ERROR WHEN USER UPDATING")
        response.redirect('/user/profile')
    })
})

module.exports = router