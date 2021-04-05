import {
    LOGIN,
    USER_INIT
} from '../actionTypes/userTypes';

import {
    registerRequest
} from '../services/userService';

import firebase from '../utils/firebase';

export const init = () => ({
    type: USER_INIT
});

export const loginSuccess = (userData) => ({
    type: LOGIN,
    payload: userData
});

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
            localStorage.setItem('isAuth', true);
            const { username, _id } = (await firebaseUser.getIdTokenResult(true)).claims;
            dispatch(loginSuccess({ firebaseUser, username, _id }));
        } else {
            localStorage.removeItem('isAuth');
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

        await dispatch(login({ email, password }));
    } catch (error) {
        throw error;
    }

};

export const login = ({ email, password }) => async (dispatch) => {
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        const firebaseUser = response.user;
        const { username, _id } = (await firebaseUser.getIdTokenResult(true)).claims;
        dispatch(loginSuccess({ firebaseUser, username, _id }));
    } catch (error) {
        throw error;
    }
};

export const logout = () => async (dispatch) => {
    try {
        await firebase.auth().signOut();
        dispatch(init());
    } catch (error) {
        alert(error);
    }
};