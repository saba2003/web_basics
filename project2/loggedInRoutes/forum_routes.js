const { Router } = require('express')
const router = Router()
const authControl = require('../middleware/auth_control')

router.get('/forum', authControl, async (request, response) => {
    response.render('forum', {
        tab_title: "FORUM"
    })
})

module.exports = router