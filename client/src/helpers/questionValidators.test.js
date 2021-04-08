import questionValidators from './questionValidators';

describe('title validator', () => {
    test('should pass with valid title', () => {
        const title = '0123456789';
        const result = questionValidators.title(title);

        expect(result).toEqual('');
    });

    test('should throw with invalid title', () => {
        const title = '012345678';
        const result = questionValidators.title(title);

        expect(result).toEqual('Title must be between 10 and 50 characters long.');
    });
});

describe('subject validator', () => {
    test('should pass with valid subject', () => {
        const subject = 'math';
        const result = questionValidators.subject(subject);

        expect(result).toEqual('');
    });

    test('should throw with invalid subject', () => {
        const subject = 'qqq';
        const result = questionValidators.subject(subject);

        expect(result).toEqual('You must select a subject.');
    });
});

describe('grade validator', () => {
    test('should pass with valid grade', () => {
        const grade = '1';
        const result = questionValidators.grade(grade);

        expect(result).toEqual('');
    });

    test('should throw with invalid grade', () => {
        const grade = '13';
        const result = questionValidators.grade(grade);

        expect(result).toEqual('You must select grade.');
    });
});

describe('description validator', () => {
    test('should pass with valid description', () => {
        const description = '012345678901234567890123456789';
        const result = questionValidators.description(description);

        expect(result).toEqual('');
    });

    test('should throw with invalid description', () => {
        const description = '01234567890123456789012345678';
        const result = questionValidators.description(description);

        expect(result).toEqual('Description must be at least 30 characters long.');
    });
});