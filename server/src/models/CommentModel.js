const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: 'ObjectId',
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('Comment', CommentSchema);
module.exports = model;