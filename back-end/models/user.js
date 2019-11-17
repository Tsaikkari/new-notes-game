const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    levels: [{
        type: String,
        required: true
    }],
    games: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Game',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

UserSchema.methods.play = async function(game) {
    this.games.push(game)
    game.players.push(this)
    await this.save
    await game.save
    console.log('hello!')
}

UserSchema.plugin.require('mongoose-autopopulate')

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel


