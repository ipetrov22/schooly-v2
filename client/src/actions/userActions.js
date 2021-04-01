import {
    LOGIN
} from '../actionTypes/userTypes';

import {
    registerRequest
} from '../services/userService';

import firebase from '../utils/firebase';

export const loginSuccess = (userData) => ({
    type: LOGIN,
    payload: userData
});

export const register = ({ username, email, password }) => async (dispatch) => {
    try {
        const data = await registerRequest({ username, email, password });

        if (data.error) {
            throw data.error.message;
        }

        dispatch(login({ email, password }));
    } catch (error) {
        alert(error);
    }

};

export const login = ({ email, password }) => async (dispatch) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        const firebaseUser = response.user;
        const {username, _id} = (await firebaseUser.getIdTokenResult()).claims;
        
        dispatch(loginSuccess({ firebaseUser, username, _id }));
    } catch (error) {
        alert(error);
    }
};