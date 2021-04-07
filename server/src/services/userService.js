const admin = require('../config/firebase');
const UserModel = require('../models/UserModel');
const validators = require('../helpers/userValidators');

const createUser = async ({ username, email, password }) => {

    const usernameValidationResult = validators.username(username);
    if (usernameValidationResult) {
        throw { message: usernameValidationResult };
    }

    const emailValidationResult = validators.email(email);
    if (emailValidationResult) {
        throw { message: emailValidationResult };
    }

    const passwordValidationResult = validators.password(password);
    if (passwordValidationResult) {
        throw { message: passwordValidationResult };
    }

    const user = await UserModel.findOne({ username });

    if (user) {
        throw { message: 'Username is taken!' };
    }

    return admin.auth().createUser({ email, password })
        .then(async (userRecord) => {
            const user = new UserModel({ username, email });
            const _id = user._id;
            await user.save();

            return admin.auth().setCustomUserClaims(userRecord.uid, { _id, username });
        })
        .then(() => 'User created.')
        .catch((err) => {
            throw err;
        });
};

const getOwn = async (userId) => {
    try {
        const user = await UserModel.findById(userId).populate(['askedQuestions', 'favoriteQuestions']);
        return user;
    } catch (error) {
        throw { message: error };
    }
};

const favoriteQuestion = async (questionId, userId) => {
    try {
        const user = await UserModel.findById(userId);

        if (user.favoriteQuestions.includes(questionId)) {
            throw 'This question is already marked as favorite.';
        }

        if (user.askedQuestions.includes(questionId)) {
            throw 'You cannot favorite your own question.';
        }

        await UserModel.findByIdAndUpdate(userId, {
            $addToSet: {
                favoriteQuestions: questionId
            }
        });

        return 'Success';

    } catch (error) {
        throw { message: error };
    }
};

module.exports = {
    createUser,
    getOwn,
    favoriteQuestion
};