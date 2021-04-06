const QuestionModel = require('../models/QuestionModel');
const UserModel = require('../models/UserModel');
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

        return question._id;
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
        const question = await QuestionModel.findById(questionId).
            populate([
                { path: 'comments', options: { sort: { date: -1 } }, populate: { path: 'author', select: 'username' } },
                { path: 'author', select: 'username' }
            ]);


        return question;
    } catch (error) {
        throw { message: error };
    }
};

const edit = async ({ title, subject, grade, description }, questionId, userId) => {
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
        const user = await UserModel.findById(userId);

        if(!user.askedQuestions.includes(questionId)){
            throw 'This is not your question!';
        }

        await QuestionModel.findByIdAndUpdate(questionId, {
            title,
            subject,
            grade,
            description
        });

        return questionId;

    } catch (error) {
        throw { message: error };
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    edit
};