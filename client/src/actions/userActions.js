import {
    LOGIN,
    INIT
} from '../actionTypes/userTypes';

import {
    registerRequest
} from '../services/userService';

import firebase from '../utils/firebase';

export const init = () => ({
    type: INIT
});

export const loginSuccess = (userData) => ({
    type: LOGIN,
    payload: userData
});

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
            const { username, _id } = (await firebaseUser.getIdTokenResult(true)).claims;
            dispatch(loginSuccess({ firebaseUser, username, _id }));
        } else {
            dispatch(init());
        }
    });
};

export const register = ({ username, email, password }) => async (dispatch) => {
    try {
        const data = await registerRequest({ username, email, password });

        if (data.error) {
            throw data.error.message;
        }

        dispatch(login({ email, password }));
    } catch (error) {
        throw error;
    }

};

export const login = ({ email, password }) => async () => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        throw error;
    }
};