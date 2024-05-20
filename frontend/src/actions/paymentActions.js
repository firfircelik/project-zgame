import axios from 'axios';

export const processPayment = () => async (dispatch) => {
    try {
        const response = await axios.post('/api/payments/process');
        dispatch({ type: 'PAYMENT_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'PAYMENT_FAIL', payload: error.response.data });
    }
};
