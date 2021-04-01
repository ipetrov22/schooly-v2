import requester from '../utils/requester'
import { SERVER_ADDRESS } from '../env';

export const registerRequest = (data) => {
    return requester.post(`${SERVER_ADDRESS}/user`, data);
};