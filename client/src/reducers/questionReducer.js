import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION,
    CREATE_COMMENT,
    CLEAR_QUESTION
} from '../actionTypes/questionTypes';

const initialState = {
    questions: [],
    question: {
        _id: '',
        author: {},
        comments: [],
        title: '',
        subject: '',
        grade: '',
        description: '',
        date: ''
    }
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        case GET_ONE_QUESTION:
            return {
                ...state,
                question: action.payload
            }
        case CREATE_COMMENT:
            return {
                ...state,
                question: {
                    ...state.question,
                    comments: [action.payload, ...state.question.comments]
                }
            }
        case CLEAR_QUESTION:
            return {
                ...state,
                question: initialState.question
            }
        default:
            return state;
    }
};

export default questionReducer;