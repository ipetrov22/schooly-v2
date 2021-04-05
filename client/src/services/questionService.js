import requester from '../utils/requester'
import { SERVER_ADDRESS } from '../env';

export const createQuestionRequest = (data, idToken) => {
    return requester.post(`${SERVER_ADDRESS}/question`, data, idToken);
};

export const getAllQuestionsRequest = () => {
    return requester.get(`${SERVER_ADDRESS}/question`);
};

export const getOneQuestionRequest = (questionId, idToken) => {
    return requester.get(`${SERVER_ADDRESS}/question/${questionId}`, null, idToken);
};