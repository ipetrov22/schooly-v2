const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: 'ObjectId',
        ref: 'User',
        required: true
    },
    comments: [{
        type: 'ObjectId',
        ref: 'Comment'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('Question', QuestionSchema);
module.exports = model;