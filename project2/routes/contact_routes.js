const { Router } = require('express')
const unAuthControl = require('../middleware/unAuth_control')
const router = Router()

router.get('/contact', unAuthControl, async (request, response) => {
    response.render('contact', {
        tab_title: "CONTACT",
    })
})

module.exports = router