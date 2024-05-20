import axios from 'axios';

export const addQuestion = (questionData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/questions/add', questionData);
        dispatch({ type: 'ADD_QUESTION_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_QUESTION_FAIL', payload: error.response.data });
    }
};

export const getQuestions = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/questions');
        dispatch({ type: 'GET_QUESTIONS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'GET_QUESTIONS_FAIL', payload: error.response.data });
    }
};
