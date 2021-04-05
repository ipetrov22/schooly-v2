import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION,
    CREATE_COMMENT
} from '../actionTypes/questionTypes';

const initialState = {
    questions: [],
    question: {}
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
        default:
            return state;
    }
};

export default questionReducer;