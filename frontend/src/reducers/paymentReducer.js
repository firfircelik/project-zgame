const initialState = {
    message: '',
    loading: false,
    error: null
};

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PAYMENT_SUCCESS':
            return {
                ...state,
                message: action.payload.message,
                loading: false,
                error: null
            };
        case 'PAYMENT_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
