import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Geri bildirim gönderme işlemi burada yapılacak
        console.log('Geri bildirim gönderildi:', feedback);
        setFeedback('');
    };

    return (
        <main>
            <h2>Geri Bildirim</h2>
            <form onSubmit={handleSubmit}>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Geri bildiriminizi yazın..." required></textarea>
                <button type="submit">Gönder</button>
            </form>
        </main>
    );
};

export default FeedbackForm;
