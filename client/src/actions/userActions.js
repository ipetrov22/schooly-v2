import {
    REGISTER
} from '../actionTypes/userTypes';

import firebase from '../utils/firebase';

export const registerSuccess = (userData) => ({
    type: REGISTER,
    payload: userData
});

export const register = ({ username, email, password }) => async (dispatch) => {

};