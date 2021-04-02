import {
    INIT,
    LOGIN
} from '../actionTypes/userTypes';

const initialState = {
    firebaseUser: null,
    username: '',
    _id: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return initialState;
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