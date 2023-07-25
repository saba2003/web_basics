const { Schema, model } = require('mongoose')

const UserModel = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        photo: {
            type: String,
        },
        profession: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
    }, 
    { timestamps: true }
)

module.exports = model("User", UserModel)