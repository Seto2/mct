var mongoose = require('mongoose')

const BehaviorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Behavior', BehaviorSchema)
