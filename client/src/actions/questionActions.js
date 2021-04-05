import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION
} from '../actionTypes/questionTypes';

import {
    createQuestionRequest,
    getAllQuestionsRequest,
    getOneQuestionRequest
} from '../services/questionService';

export const getAllQuestionsSuccess = (payload) => ({
    type: GET_ALL_QUESTIONS,
    payload
});

export const getOneQuestionSuccess = (payload) => ({
    type: GET_ONE_QUESTION,
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