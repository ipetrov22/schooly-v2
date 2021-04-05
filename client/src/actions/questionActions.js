import {
    GET_ALL_QUESTIONS
} from '../actionTypes/questionTypes';

import {
    createQuestionRequest,
    getAllQuestionsRequest
} from '../services/questionService';

export const getAllQuestionsSuccess = (payload) => ({
    type: GET_ALL_QUESTIONS,
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