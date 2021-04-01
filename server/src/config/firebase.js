const admin = require('firebase-admin');

const serviceAccount = require('./schooly-v2-firebase-adminsdk-jcj77-d0ecf33623.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;