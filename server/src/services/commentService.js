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

const deleteOne = async ({ questionId }, commentId, userId) => {
    try {
        const comment = await CommentModel.findById(comment);

        if (comment.author !== userId) {
            throw 'This is not your comment!';
        }

        await CommentModel.findByIdAndDelete(commentId);

        await QuestionModel.findByIdAndUpdate(questionId, {
            $pull: {
                comments: commentId
            }
        });

        return 'Success';
    } catch (error) {
        throw { message: error };
    }
};

module.exports = {
    create,
    deleteOne
};