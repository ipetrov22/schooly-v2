const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const email = (email) => {
    if (!email.match(emailRegex)) {
        return 'Invalid email.';
    }

    return '';
};

const usernameRegex = /^[a-z0-9._-]{3,20}$/;

const username = (username) => {
    if (!username.match(usernameRegex)) {
        return `Username length should be between 3 and 20 and contain no special characters.`;
    }

    return '';
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,30}$/;

const password = (password) => {
    if (!password.match(passwordRegex)) {
        return 'Password should be between 6 and 30 characters and consist of numbers and latin letters.';
    }

    return '';
};

const repeatPassword = (repeatPassword, password) => {
    if (repeatPassword !== password) {
        return 'Password should match.';
    }

    return '';
};

const validators = {
    email,
    username,
    password,
    repeatPassword
};

export default validators;