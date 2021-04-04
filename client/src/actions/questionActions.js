import {
    CREATE
} from '../actionTypes/questionTypes';

import {
    createQuestionRequest
} from '../services/questionService';

export const createSuccess = () => ({
    type: CREATE
});

export const createQuestion = (data, idToken) => async (dispatch) => {
    try {
        const response = await createQuestionRequest(data, idToken);

        if (response.error) {
            throw response.error.message;
        }
        console.log(response);
        dispatch(createSuccess(response));
    } catch (error) {
        throw error;
    }
};