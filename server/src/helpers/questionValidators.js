const subjects = [
    'math',
    'bulgarian',
    'english',
    'german',
    'french',
    'spanish',
    'italian',
    'russian',
    'physics',
    'chemistry',
    'biology',
    'history',
    'geography',
    'it',
    'sports',
    'music',
    'art'
];

const title = (title) => {
    if (title.length < 10 || title.length > 30) {
        return 'Title must be between 10 and 50 characters long.';
    }
};

const subject = (subject) => {
    if (!subjects.includes(subject)) {
        return 'You must select a subject.';
    }
};

const grade = (grade) => {
    if (!(+grade >= 1 && +grade <= 12)) {
        return 'You must select grade.';
    }
};

const description = (description) => {
    if (description.length < 30) {
        return 'Description must be at least 30 characters long.';
    }
};

module.exports = {
    title,
    subject,
    grade,
    description
};