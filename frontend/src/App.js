import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Payment from './components/Payment';
import UploadQuestions from './components/UploadQuestions';
import GamePlay from './components/GamePlay';
import PlayGame from './components/PlayGame';
import FeedbackForm from './components/FeedbackForm';
import Help from './components/Help';
import './styles.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Route path="/" component={Home} exact />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/payment" component={Payment} />
                <Route path="/upload-questions" component={UploadQuestions} />
                <Route path="/gameplay" component={GamePlay} />
                <Route path="/play" component={PlayGame} />
                <Route path="/feedback" component={FeedbackForm} />
                <Route path="/help" component={Help} />
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;
