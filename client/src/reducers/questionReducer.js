import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION,
    CREATE_COMMENT,
    CLEAR_QUESTION,
    EDIT_QUESTION,
    CLEAR_ALL_QUESTIONS,
    DELETE_COMMENT
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
        case EDIT_QUESTION:
            return {
                ...state,
                question: {
                    ...state.question,
                    ...action.payload
                }
            }
        case CLEAR_ALL_QUESTIONS:
            return {
                ...state,
                questions: initialState.questions
            }
        case DELETE_COMMENT:
            return {
                ...state,
                question: {
                    ...state.question,
                    comments: state.question.comments.filter(x => x._id !== action.payload)
                }
            }
        default:
            return state;
    }
};

export default questionReducer;