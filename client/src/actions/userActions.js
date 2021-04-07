import {
    LOGIN,
    USER_INIT,
    FAVORITE_QUESTION,
    UNFAVORITE_QUESTION
} from '../actionTypes/userTypes';

import {
    registerRequest,
    getOwnRequest,
    favoriteQuestionRequest,
    unfavoriteQuestionRequest
} from '../services/userService';

import firebase from '../utils/firebase';

export const init = () => ({
    type: USER_INIT
});

export const loginSuccess = (userData) => ({
    type: LOGIN,
    payload: userData
});

export const favoriteQuestionSuccess = (payload) => ({
    type: FAVORITE_QUESTION,
    payload
});

export const unfavoriteQuestionSuccess = (payload) => ({
    type: UNFAVORITE_QUESTION,
    payload
});

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (firebaseUser) => {
        if (firebaseUser) {
            localStorage.setItem('isAuth', true);

            const idToken = await firebaseUser.getIdToken();
            const user = await getOwnRequest(idToken);
            dispatch(loginSuccess({ firebaseUser, ...user }));
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

export const favoriteQuestion = (question, idToken) => async (dispatch) => {
    try {
        const response = await favoriteQuestionRequest(question._id, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(favoriteQuestionSuccess(question));
    } catch (error) {
        throw error;
    }
};

export const unfavoriteQuestion = (questionId, idToken) => async (dispatch) => {
    try {
        const response = await unfavoriteQuestionRequest(questionId, idToken);
        
        if (response.error) {
            throw response.error.message;
        }

        dispatch(unfavoriteQuestionSuccess(questionId));
    } catch (error) {
        throw error;
    }
};