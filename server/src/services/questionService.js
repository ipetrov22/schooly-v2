const QuestionModel = require('../models/QuestionModel');
const UserModel = require('../models/UserModel');
require('../models/CommentModel');
const questionValidators = require('../helpers/questionValidators');

const create = async ({ title, subject, grade, description }, userId) => {
    const titleValidationResult = questionValidators.title(title);
    if (titleValidationResult) {
        throw { message: titleValidationResult };
    }

    const subjectValidationResult = questionValidators.subject(subject);
    if (subjectValidationResult) {
        throw { message: subjectValidationResult };
    }

    const gradeValidationResult = questionValidators.grade(grade);
    if (gradeValidationResult) {
        throw { message: gradeValidationResult };
    }

    const descriptionValidationResult = questionValidators.description(description);
    if (descriptionValidationResult) {
        throw { message: descriptionValidationResult };
    }

    try {
        const question = new QuestionModel({ title, subject, grade, description, author: userId });
        await question.save();

        await UserModel.findByIdAndUpdate(userId, {
            $addToSet: {
                askedQuestions: question._id
            }
        });

        return question;
    } catch (error) {
        throw { message: error }
    }
};

const getAll = async () => {
    try {
        const questions = await QuestionModel.find();
        return questions.reverse();
    } catch (error) {
        throw { message: error };
    }
};

const getOne = async (questionId) => {
    try {
        const question = await QuestionModel.findById(questionId).populate('comments');
        return question;
    } catch (error) {
        throw { message: error };
    }
};

module.exports = {
    create,
    getAll,
    getOne
};