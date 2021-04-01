const serverAddress = {
    development: 'http://localhost:3333',
    production: ''
};

export const SERVER_ADDRESS = serverAddress[process.env.NODE_ENV];