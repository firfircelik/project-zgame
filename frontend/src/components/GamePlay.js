import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import '../styles.css';

const GamePlay = () => {
    const dispatch = useDispatch();
    const { questions, loading, error } = useSelector(state => state.question);

    const [currentLevel, setCurrentLevel] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [characterPosition, setCharacterPosition] = useState({ left: 0, top: 0 });
    const [keyPosition, setKeyPosition] = useState({ left: Math.random() * 80 + 10, top: Math.random() * 80 + 10 });
    const [hasKey, setHasKey] = useState(false);
    const [doorPosition, setDoorPosition] = useState({ left: 90, top: 90 });

    const customization = JSON.parse(localStorage.getItem('characterCustomization')) || { skinTone: 'default', outfit: 'default', shoes: 'default' };
    const rescuerPhoto = localStorage.getItem('rescuerPhoto');
    const rescuedPhoto = localStorage.getItem('rescuedPhoto');

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setCharacterPosition(prev => ({ ...prev, left: Math.max(prev.left - 5, 0) }));
            } else if (e.key === 'ArrowRight') {
                setCharacterPosition(prev => ({ ...prev, left: Math.min(prev.left + 5, 95) }));
            } else if (e.key === 'ArrowUp') {
                setCharacterPosition(prev => ({ ...prev, top: Math.max(prev.top - 5, 0) }));
            } else if (e.key === 'ArrowDown') {
                setCharacterPosition(prev => ({ ...prev, top: Math.min(prev.top + 5, 95) }));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!hasKey && Math.abs(characterPosition.left - keyPosition.left) < 5 && Math.abs(characterPosition.top - keyPosition.top) < 5) {
            setHasKey(true);
            setShowHint(true);
        }
    }, [characterPosition, keyPosition, hasKey]);

    useEffect(() => {
        if (hasKey && Math.abs(characterPosition.left - doorPosition.left) < 5 && Math.abs(characterPosition.top - doorPosition.top) < 5) {
            checkAnswer();
        }
    }, [characterPosition, doorPosition, hasKey]);

    const checkAnswer = () => {
        if (inputAnswer.toLowerCase() === questions[currentLevel].answer.toLowerCase()) {
            setCurrentLevel(currentLevel + 1);
            setInputAnswer('');
            setShowHint(false);
            setHasKey(false);
            setCharacterPosition({ left: 0, top: 0 });
            setKeyPosition({ left: Math.random() * 80 + 10, top: Math.random() * 80 + 10 });
        } else {
            setShowHint(true);
        }
    };

    if (loading) {
        return <div>Yükleniyor...</div>;
    }

    if (error) {
        return <div>Hata: {error.message}</div>;
    }

    if (currentLevel >= questions.length) {
        return <div>Tebrikler! Tüm seviyeleri tamamladınız.</div>;
    }

    return (
        <div className="gameplay" style={{ backgroundImage: `url(/assets/escape_room_background_level_${currentLevel + 1}.png)` }}>
            <h2>Seviye {currentLevel + 1}</h2>
            <p>{questions[currentLevel].question}</p>
            <div className="game-area">
                <div
                    className={`character ${customization.skinTone} ${customization.outfit} ${customization.shoes}`}
                    style={{ left: `${characterPosition.left}%`, top: `${characterPosition.top}%`, backgroundImage: `url(${rescuerPhoto})` }}
                ></div>
                {!hasKey && <div className="key" style={{ left: `${keyPosition.left}%`, top: `${keyPosition.top}%` }}></div>}
                {hasKey && <div className="door" style={{ left: `${doorPosition.left}%`, top: `${doorPosition.top}%` }}></div>}
                {showHint && (
                    <div className="hint">
                        <p>Bilmeceyi cevaplayın:</p>
                        <input type="text" value={inputAnswer} onChange={(e) => setInputAnswer(e.target.value)} />
                        <button onClick={checkAnswer}>Cevapla</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamePlay;
