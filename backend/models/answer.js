var mongoose = require('mongoose')
const Behavior = require('./behavior')

const AnswerSchema = new mongoose.Schema({
    behaviorList: [
        {
            behavior: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: Behavior,
            },
            index: {
                type: Number,
                required: true,
            }
        }
    ],
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Answer', AnswerSchema)
