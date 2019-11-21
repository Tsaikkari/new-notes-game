const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    staffs: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }],
    tests: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }],
    users: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }]
})

GameSchema.plugin(require('mongoose-autopopulate'))

const GameModel = mongoose.model('Game', GameSchema)

module.exports = GameModel


