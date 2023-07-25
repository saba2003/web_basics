const { Router } = require('express')
const router = Router()
const authControl = require('../middleware/auth_control')

router.get('/market', authControl, async (request, response) => {
    response.render('market', {
        tab_title: "MARKET"
    })
})

module.exports = router