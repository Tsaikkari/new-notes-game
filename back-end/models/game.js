const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    staffs: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Staff'
    }],
    users: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

GameSchema.plugin(require('mongoose-autopopulate'))

const GameModel = mongoose.model('Game', GameSchema)

module.exports = GameModel


