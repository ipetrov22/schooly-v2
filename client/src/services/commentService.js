import requester from '../utils/requester'
import { SERVER_ADDRESS } from '../env';

export const createCommentRequest = (data, idToken) => {
    return requester.post(`${SERVER_ADDRESS}/comment`, data, idToken);
};

export const deleteCommentRequest = (data, commentId , idToken) => {
    return requester.delete(`${SERVER_ADDRESS}/comment/${commentId}`, data, idToken);
};