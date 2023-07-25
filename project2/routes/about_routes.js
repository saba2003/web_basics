const { Router } = require('express')
const unAuthControl = require('../middleware/unAuth_control')
const router = Router()

router.get('/about', unAuthControl, async (request, response) => {
    response.render('about', {
        tab_title: "ABOUT",
    })
})

module.exports = router