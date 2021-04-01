const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    },
    favoriteQuestions: [{
        type: 'ObjectId',
        ref: 'Question'
    }],
    askedQuestions: [{
        type: 'ObjectId',
        ref: 'Question'
    }]
});

const model = mongoose.model('User', UserSchema);
module.exports = model;