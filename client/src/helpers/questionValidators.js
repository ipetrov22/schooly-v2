import subjects from '../dictionaries/subjects';

const title = (title) => {
    if (title.length < 10 && title.length > 30) {
        return 'Title must be between 10 and 50 characters long.';
    }

    return '';
};

const subject = (subject) => {
    if (!subjects[subject]) {
        return 'You must select a subject.';
    }

    return '';
};

const grade = (grade) => {
    if (!(+grade >= 1 && +grade <= 12)) {
        return 'You must select grade.';
    }

    return '';
};

const description = (description) => {
    if(description.length < 30){
        return 'Description must be at least 30 characters long.';
    }

    return '';
};

const questionValidators = {
    title,
    subject,
    grade,
    description
};

export default questionValidators;