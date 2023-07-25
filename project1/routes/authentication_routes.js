const { Router } = require('express')
const router = Router()
const User = require('../models/user_model')
const bcrypt = require('bcryptjs')
const unAuthControl = require('../middleware/unAuth_control')
const imageMiddleware = require('../middleware/image')

const fs = require('fs');
const path = require('path')
const req = require('express/lib/request')

router.get('/authentication/login', unAuthControl, (request, response) => {

    response.render('login', {
        tab_title: 'Login',
        is_login: true,
        info: request.flash('info'),
        error: request.flash('error')
    })
})

router.post('/authentication/login', unAuthControl, async (request, response) => {
    User.findOne({ email: request.body.email })
    .then( async (user_document) => {
        if(user_document){
            const is_match = await bcrypt.compare(request.body.password, user_document.password)

            if (is_match){
                request.session.isAuthenticated = true
                request.session.user = user_document

                response.redirect("/")
            }else{
                request.flash("error", "PASSWORD ERROR")
                response.redirect("/authentication/login")
            }

        }else{
            request.flash("error", "EMAIL ERROR")
            response.redirect("/authentication/login")
        }
    })
    .catch(() => {
        request.flash("error", "TECHNICAL GLITCH")
        response.redirect("/authentication/login")
    })
})

router.get('/authentication/registration', unAuthControl, (request, response) => {

    response.render('registration', {
        tab_title: 'Registr',
        is_registration: true,
        error: request.flash('error')
    })
})

router.post('/authentication/registration', unAuthControl, imageMiddleware.single("photo"), async (request, response) => {

    const { first_name, last_name, birth_date, email, password, confirm_password } = request.body

    let request_body_is_valid = true

    let isDelete = false

    Object.values(request.body).map((request_body_value) => {
        if ((request_body_value === null || request_body_value === undefined || request_body_value === "")) {
            request_body_is_valid = false
        }
    })

    if (request_body_is_valid){
        if (password === confirm_password) {
            const email_candidate = await User.findOne({ email: email })

            if (!email_candidate){
                const hash_password = await bcrypt.hash(password, 10)

                if(request.file === undefined){
                    isDelete = true
                    request.flash("error", "Wrong Image Format") 
                    response.redirect("/authentication/registration")
                }else{
                    User.create(
                        {
                            first_name: first_name,
                            last_name: last_name,
                            birth_date: birth_date,
                            email: email,
                            photo: request.file.filename,
                            password: hash_password
                        }
                    ).then(() => {

                        request.flash("info", "CONGRATS!")
                        response.redirect("/authentication/login")

                    }).catch(() => {

                        isDelete = true

                        request.flash("error", "TECHNICAL error") 
                        response.redirect("/authentication/registration")
                    })
                }
                

            } else {  
                isDelete = true         
                request.flash("error", "Email error")
                response.redirect("/authentication/registration")
            }

        } else {    
            isDelete = true                     
            request.flash("error", "passwords don't match")
            response.redirect("/authentication/registration")
        }

    } else {
        isDelete = true
        request.flash("error", "Please fill all fields")
        response.redirect("/authentication/registration")
    }

    if(isDelete && request.file != undefined){
        fs.unlink('public/images/uploads/users_profile_images/'+request.file.filename, function (err) {
            if (err) throw err;
            console.log('Photo deleted!');
        });
    }
        
})

router.get('/authentication/logout', (request, response) => {
    request.session.destroy(() => {
        response.redirect("/authentication/login")
    })
})

module.exports = router