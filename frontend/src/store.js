import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers/userReducer';
import { paymentReducer } from './reducers/paymentReducer';
import { questionReducer } from './reducers/questionReducer';

const reducer = combineReducers({
    user: userReducer,
    payment: paymentReducer,
    question: questionReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
