import {
    GET_ALL_QUESTIONS
} from '../actionTypes/questionTypes';

const initialState = {
    questions: []
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state;
    }
};

export default questionReducer;