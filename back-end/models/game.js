const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    levels: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }],
    tests: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }],
    players: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }]
})

GameSchema.plugin(require('mongoose-autopopulate'))

const GameModel = mongoose.model('Game', GameSchema)

module.exports = GameModel


