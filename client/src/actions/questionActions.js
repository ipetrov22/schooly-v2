import {
    GET_ALL_QUESTIONS,
    GET_ONE_QUESTION,
    CREATE_COMMENT,
    CLEAR_QUESTION,
    EDIT_QUESTION,
    CLEAR_ALL_QUESTIONS,
    DELETE_COMMENT
} from '../actionTypes/questionTypes';

import {
    addQuestionToAsked
} from '../actions/userActions';

import {
    createQuestionRequest,
    getAllQuestionsRequest,
    getOneQuestionRequest,
    editQuestionRequest,
    deleteQuestionRequest
} from '../services/questionService';

import {
    createCommentRequest,
    deleteCommentRequest
} from '../services/commentService';

export const getAllQuestionsSuccess = (payload) => ({
    type: GET_ALL_QUESTIONS,
    payload
});

export const getOneQuestionSuccess = (payload) => ({
    type: GET_ONE_QUESTION,
    payload
});

export const createCommentSuccess = (payload) => ({
    type: CREATE_COMMENT,
    payload
});

export const clearQuestion = () => ({
    type: CLEAR_QUESTION
});

export const editQuestionSuccess = (payload) => ({
    type: EDIT_QUESTION,
    payload
});

export const clearAllQuestions = () => ({
    type: CLEAR_ALL_QUESTIONS
});

export const deleteCommentSuccess = (payload) => ({
    type: DELETE_COMMENT,
    payload
});

export const createQuestion = (data, idToken) => async (dispatch) => {
    try {
        const response = await createQuestionRequest(data, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(addQuestionToAsked(response));
        return response._id;
    } catch (error) {
        throw error;
    }
};

export const getAllQuestions = () => async (dispatch) => {
    try {
        const response = await getAllQuestionsRequest();

        if (response.error) {
            throw response.error.message;
        }

        dispatch(getAllQuestionsSuccess(response));
    } catch (error) {
        alert(error);
    }
};

export const getOneQuestion = (questionId, idToken) => async (dispatch) => {
    try {
        const response = await getOneQuestionRequest(questionId, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(getOneQuestionSuccess(response));
    } catch (error) {
        alert(error);
    }
};

export const createComment = (data, idToken) => async (dispatch) => {
    try {
        const response = await createCommentRequest(data, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(createCommentSuccess(response));
    } catch (error) {
        throw error;
    }
};

export const editQuestion = (data, questionId, idToken) => async (dispatch) => {
    try {
        const response = await editQuestionRequest(data, questionId, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(editQuestionSuccess(data));
    } catch (error) {
        throw error;
    }
};

export const deleteQuestion = (questionId, idToken) => async () => {
    try {
        const response = await deleteQuestionRequest(questionId, idToken);

        if (response.error) {
            throw response.error.message;
        }
    } catch (error) {
        throw error;
    }
};

export const deleteComment = (data, commentId, idToken) => async (dispatch) => {
    try {
        const response = await deleteCommentRequest(data, commentId, idToken);

        if (response.error) {
            throw response.error.message;
        }

        dispatch(deleteCommentSuccess(commentId));
    } catch (error) {
        throw error;
    }
};