import userValidators from './userValidators';

describe('email validator', () => {
    test('should pass with valid email', () => {
        const email = 'validemail@email.com';
        const result = userValidators.email(email);

        expect(result).toEqual('');
    });

    test('should throw with invalid email', () => {
        const email = 'invalidemail';
        const result = userValidators.email(email);

        expect(result).toEqual('Invalid email.');
    });

    test('should throw with invalid email', () => {
        const email = 'invalidemail@ads';
        const result = userValidators.email(email);

        expect(result).toEqual('Invalid email.');
    });
});

describe('username validator', () => {
    test('should pass with valid username', () => {
        const username = 'username';
        const result = userValidators.username(username);

        expect(result).toEqual('');
    });

    test('should throw with invalid username', () => {
        const username = 'us';
        const result = userValidators.username(username);

        expect(result).toEqual('Username should be between 3 and 20 characters long and contain no special symbols.');
    });

    test('should throw with invalid username', () => {
        const username = '@$!$@!$!@';
        const result = userValidators.username(username);

        expect(result).toEqual('Username should be between 3 and 20 characters long and contain no special symbols.');
    });
});

describe('password validator', () => {
    test('should pass with valid password', () => {
        const password = 'qwe123';
        const result = userValidators.password(password);

        expect(result).toEqual('');
    });

    test('should throw with invalid password', () => {
        const password = 'qweqw';
        const result = userValidators.password(password);

        expect(result).toEqual('Password should be between 6 and 30 characters long and consist of numbers and latin letters.');
    });

    test('should throw with invalid password', () => {
        const password = 'qweqwe';
        const result = userValidators.password(password);

        expect(result).toEqual('Password should be between 6 and 30 characters long and consist of numbers and latin letters.');
    });

    test('should throw with invalid password', () => {
        const password = '123123';
        const result = userValidators.password(password);

        expect(result).toEqual('Password should be between 6 and 30 characters long and consist of numbers and latin letters.');
    });
});