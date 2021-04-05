const CommentModel = require('../models/CommentModel');
const QuestionModel = require('../models/QuestionModel');

const create = async ({ content, questionId }, author) => {
    try {
        if (content.length < 1) {
            throw 'Comment cannot be empty.';
        }

        const comment = new CommentModel({ content, author });
        await comment.save();

        await QuestionModel.findByIdAndUpdate(questionId, {
            $addToSet: {
                comments: comment._id
            }
        });

        return await comment.populate({ path: 'author', select: 'username' }).execPopulate();
    } catch (error) {
        throw { message: error };
    }
};

module.exports = {
    create
};