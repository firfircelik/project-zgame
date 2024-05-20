const initialState = {
    questions: [],
    loading: false,
    error: null
};

export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTION_SUCCESS':
            return {
                ...state,
                questions: [...state.questions, action.payload],
                loading: false,
                error: null
            };
        case 'ADD_QUESTION_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'GET_QUESTIONS_SUCCESS':
            return {
                ...state,
                questions: action.payload,
                loading: false,
                error: null
            };
        case 'GET_QUESTIONS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
