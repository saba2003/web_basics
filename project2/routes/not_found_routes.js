const { Router } = require('express')
const router = Router()

router.get('*', (request, response) => {

    response.render('notFound', {
        tab_title: "404",
        isNotFound: true
    })
})

module.exports = router