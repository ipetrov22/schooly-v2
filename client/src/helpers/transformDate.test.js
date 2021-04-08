import transformDate from './transformDate';

describe('transformDate function', ()=>{
    test('should return correct date format', () => {
        const incomingDate = '2021-04-05T18:34:28.013+00:00';
        const expected = 'Apr 05 2021 21:34';

        expect(transformDate(incomingDate)).toEqual(expected);
    });
});