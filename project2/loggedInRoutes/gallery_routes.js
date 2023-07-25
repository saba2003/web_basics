const { Router } = require('express')
const router = Router()
const authControl = require('../middleware/auth_control')

router.get('/gallery', authControl, async (request, response) => {
    response.render('gallery', {
        tab_title: "GALLERY"
    })
})

module.exports = router