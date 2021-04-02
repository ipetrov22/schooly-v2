import {
    USER_INIT,
    LOGIN
} from '../actionTypes/userTypes';

const initialState = {
    firebaseUser: JSON.parse(localStorage.getItem('isAuth')),
    username: '',
    _id: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INIT:
            return {
                ...initialState,
                firebaseUser: null
            };
        case LOGIN:
            return {
                ...state,
                firebaseUser: action.payload.firebaseUser,
                username: action.payload.username,
                _id: action.payload._id
            }
        default:
            return state;
    }
};

export default userReducer;