import requester from '../utils/requester'
import { SERVER_ADDRESS } from '../env';

export const registerRequest = (data) => {
    return requester.post(`${SERVER_ADDRESS}/user`, data);
};

export const getOwnRequest = (idToken) => {
    return requester.get(`${SERVER_ADDRESS}/user/own`, null, idToken);
};

export const favoriteQuestionRequest = (questionId, idToken) => {
    return requester.put(`${SERVER_ADDRESS}/user/favorite/${questionId}`, null, idToken);
};

export const unfavoriteQuestionRequest = (questionId, idToken) => {
    return requester.put(`${SERVER_ADDRESS}/user/unfavorite/${questionId}`, null, idToken);
};