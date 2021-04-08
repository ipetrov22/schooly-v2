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