const mongoose = require('mongoose');
const { URI } = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true

        });
        console.log('Connected to DB!');
    }
    catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;