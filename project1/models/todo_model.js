const { Schema, model } = require('mongoose')

const TodoModel = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    }, 
    { timestamps: true }
)

module.exports = model("Todo", TodoModel)