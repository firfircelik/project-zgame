import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../actions/questionActions';

const UploadQuestions = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.question);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuestion({ question, answer }));
        setQuestion('');
        setAnswer('');
    };

    return (
        <main>
            <h2>Bilmece Yükle</h2>
            {error && <p className="error-message">{error.message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Soru" required />
                <input type="text" name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Cevap" required />
                <button type="submit">Yükle</button>
            </form>
        </main>
    );
};

export default UploadQuestions;
