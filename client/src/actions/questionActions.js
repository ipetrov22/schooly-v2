import {
    
} from '../actionTypes/questionTypes';

import {
    createQuestionRequest
} from '../services/questionService';

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