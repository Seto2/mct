var mongoose = require('mongoose')

const BehaviorSchema = new mongoose.Schema({
    behavior: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Behavior', BehaviorSchema)
