var mongoose = require('mongoose')
const Behavior = require('./behavior')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        answer: {
            type: String,
            required: true,
        },
        behavior: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: Behavior,
        }
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Question', QuestionSchema)
