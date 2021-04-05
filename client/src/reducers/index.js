import { combineReducers } from 'redux';
import user from './userReducer';
import question from './questionReducer';

const rootReducer = combineReducers({
    user,
    question
});

export default rootReducer;