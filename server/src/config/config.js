const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        PORT: process.env.PORT || 3333,
        URI: 'mongodb+srv://admin:qwe123qwe@cluster0.5uonz.mongodb.net/Schooly?retryWrites=true&w=majority',
    },
    production: {
        PORT: process.env.PORT,
        URI: 'mongodb+srv://admin:qwe123qwe@cluster0.5uonz.mongodb.net/Schooly?retryWrites=true&w=majority'
    }
};

module.exports = config[env];