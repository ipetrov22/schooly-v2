import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION,
    CREATE_COMMENT
} from '../actionTypes/questionTypes';

import {
    createQuestionRequest,
    getAllQuestionsRequest,
    getOneQuestionRequest
} from '../services/questionService';

import {
    createCommentRequest
} from '../services/commentService';

export const getAllQuestionsSuccess = (payload) => ({
    type: GET_ALL_QUESTIONS,
    payload
});

export const getOneQuestionSuccess = (payload) => ({
    type: GET_ONE_QUESTION,
    payload
});

export const createCommentSuccess = (payload) => ({
    type: CREATE_COMMENT,
    payload
});

export const createQuestion = (data, idToken) => async () => {
    try {
        const response = await createQuestionRequest(data, idToken);

        if (response.error) {
            throw response.error.message;
        }

    } catch (error) {
        throw error;
    }
};

export const getAllQuestions = () => async (dispatch) => {
    try {
        const response = await getAllQuestionsRequest();

        if (response.error) {
            throw response.error.message;
        }

        dispatch(getAllQuestionsSuccess(response));
    } catch (error) {
        alert(error);
    }
};

export const getOneQuestion = (questionId, idToken) => async (dispatch) => {
    try {
        const response = await getOneQuestionRequest(questionId, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(getOneQuestionSuccess(response));
    } catch (error) {
        alert(error);
    }
};

export const createComment = (data) => async (dispatch) => {
    try {
        const response = await createCommentRequest(data, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(createCommentSuccess(response));
    } catch (error) {
        alert(error);
    }
};