const { Router } = require('express')
const unAuthControl = require('../middleware/unAuth_control')
const User = require('../models/user_model')
const bcrypt = require('bcryptjs')
const router = Router()

let passerror = false
let mailerror = false

router.get('/login', unAuthControl, (request, response) => {
    response.render('login', {
        tab_title: "LOGIN",
        mailError: mailerror,
        passError: passerror
    })
    passerror = false
    mailerror = false
})

router.post('/login', unAuthControl, async (request, response) => {
    User.findOne({ email: request.body.email })
    .then( async (user_document) => {
        if(user_document){
            const is_match = await bcrypt.compare(request.body.password, user_document.password)

            if (is_match){
                request.session.isAuthenticated = true
                request.session.user = user_document

                response.redirect("/forum")
            }else{
                // request.flash("error", "PASSWORD ERROR")
                passerror = true
                response.redirect("/login")
            }

        }else{
            // request.flash("error", "EMAIL ERROR")
            mailerror = true
            response.redirect("/login")
        }
    })
    .catch(() => {
        // request.flash("error", "TECHNICAL GLITCH")
        response.redirect("/login")
    })
})

router.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect("/")
    })
})

module.exports = router