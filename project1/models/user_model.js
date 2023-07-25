const { Schema, model } = require('mongoose')

const UserModel = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        birth_date: {
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
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }, 
    { timestamps: true }
)

module.exports = model("User", UserModel)