import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/users/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
    }
};

export const loginUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/users/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
    }
};
