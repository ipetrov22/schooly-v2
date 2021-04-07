import {
    USER_INIT,
    LOGIN,
    FAVORITE_QUESTION,
    UNFAVORITE_QUESTION
} from '../actionTypes/userTypes';

const initialState = {
    firebaseUser: JSON.parse(localStorage.getItem('isAuth')),
    _id: '',
    username: '',
    email: '',
    askedQuestions: [],
    favoriteQuestions: []
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
                ...action.payload
            }
        case FAVORITE_QUESTION:
            return {
                ...state,
                favoriteQuestions: [...state.favoriteQuestions, action.payload]
            }
        case UNFAVORITE_QUESTION:
            return {
                ...state,
                favoriteQuestion: state.favoriteQuestions.filter(x => x._id !== action.payload)
            }
        default:
            return state;
    }
};

export default userReducer;