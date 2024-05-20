const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                error: null
            };
        case 'REGISTER_FAIL':
        case 'LOGIN_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
