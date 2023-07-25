const { Router } = require('express')
const bcrypt = require('bcryptjs')
const unAuthControl = require('../middleware/unAuth_control')
const User = require('../models/user_model')
const router = Router()

let dummyname = ""
let dummymail = ""
let dummypass = ""
let dummypass1 = ""

let passerror = false
let mailerror = false

router.get('/registration', unAuthControl, (request, response) => {
    response.render('registration', {
        tab_title: "REG",
        savedName: dummyname,
        savedmail: dummymail,
        savedpass: dummypass,
        savedpass1: dummypass1,
        mailError: mailerror,
        passError: passerror
    })
    dummyname = ""
    dummymail = ""
    dummypass = ""
    dummypass1 = ""
    passerror = false
    mailerror = false
})

router.post('/registration', unAuthControl, async (request, response) => {

    const { name, email, password, confirm_password } = request.body

    let request_body_is_valid = true

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

                    User.create(
                        {
                            name: name,
                            email: email,
                            photo: '',
                            profession: '',
                            password: hash_password
                        }
                    ).then(() => {

                        // request.flash("info", "CONGRATS!")
                        response.redirect("/login")

                    }).catch(() => {

                        // request.flash("error", "TECHNICAL error") 
                        response.redirect("/registration")
                    })

            } else {
                dummyname = name
                dummymail = email
                dummypass = password
                dummypass1 = confirm_password
                mailerror = true
                // request.flash("error", "Email error")
                response.redirect("/registration")
            }

        } else {    
            dummyname = name
            dummymail = email
            dummypass = password
            dummypass1 = confirm_password
            passerror = true
            // request.flash("error", "passwords don't match")
            response.redirect("/registration")
        }

    } else {
        // request.flash("error", "Please fill all fields")
        response.redirect("/registration")
    }
        
})


module.exports = router