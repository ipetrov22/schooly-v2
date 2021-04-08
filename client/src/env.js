const serverAddress = {
    development: 'http://localhost:3333',
    production: 'https://schooly-v2.herokuapp.com'
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV];