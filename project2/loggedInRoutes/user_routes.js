const { Router } = require('express')
const router = Router()
const User = require('../models/user_model')
const authControl = require('../middleware/auth_control')
const imageMiddleware = require('../middleware/image')

const fs = require('fs');

router.get('/user', authControl, async (request, response) => {
    response.render('user', {
        tab_title: "USER"
    })
})

router.post('/user/editUser', authControl, imageMiddleware.single("photo"), async (request, response) => {
    let requestedBody

    if(request.file != undefined){
        requestedBody = {
            name: request.body.name,
            photo: request.file.filename,
            profession: request.body.profession,
        }
        if(request.session.user.photo === undefined || request.session.user.photo === null || request.session.user.photo === ""){}
        else{
            fs.unlink('public/images/uploads/users_profile_images/'+ request.session.user.photo, function (err) {
                if (err) throw err;
            });
        }
        
    }else{
        requestedBody = {
            name: request.body.name,
            profession: request.body.profession,
        }
    }


    User.findByIdAndUpdate(request.session.user._id, requestedBody, {
        new: true,
        runValidators: true
    })
    .then((updated_user) => {
        request.session.user = updated_user,

        response.redirect('/user')
    })
    .catch(() => {
        console.log("ERROR WHEN USER UPDATING")
        response.redirect('/user')
    })
})

module.exports = router