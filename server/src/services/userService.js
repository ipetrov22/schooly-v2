const admin = require('../config/firebase');
const UserModel = require('../models/UserModel');

const createUser = async ({ username, email, password }) => {
    const user = await UserModel.findOne({ username });

    if (user) {
        throw 'Username is taken!';
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

module.exports = {
    createUser
};