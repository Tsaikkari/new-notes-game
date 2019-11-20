const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    games: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Game',
        autopopulate: {
            maxDepth: 1
        }
    }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel