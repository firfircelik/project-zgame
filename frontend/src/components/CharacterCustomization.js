import React, { useState } from 'react';

const CharacterCustomization = () => {
    const [skinTone, setSkinTone] = useState('default');
    const [outfit, setOutfit] = useState('default');
    const [shoes, setShoes] = useState('default');

    const handleSave = () => {
        const customization = { skinTone, outfit, shoes };
        localStorage.setItem('characterCustomization', JSON.stringify(customization));
    };

    return (
        <main>
            <h2>Karakter Özelleştirme</h2>
            <div>
                <label>
                    Cilt Tonu:
                    <select value={skinTone} onChange={(e) => setSkinTone(e.target.value)}>
                        <option value="default">Varsayılan</option>
                        <option value="light">Açık</option>
                        <option value="dark">Koyu</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Kıyafet:
                    <select value={outfit} onChange={(e) => setOutfit(e.target.value)}>
                        <option value="default">Varsayılan</option>
                        <option value="outfit1">Kıyafet 1</option>
                        <option value="outfit2">Kıyafet 2</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Ayakkabı:
                    <select value={shoes} onChange={(e) => setShoes(e.target.value)}>
                        <option value="default">Varsayılan</option>
                        <option value="shoes1">Ayakkabı 1</option>
                        <option value="shoes2">Ayakkabı 2</option>
                    </select>
                </label>
            </div>
            <button onClick={handleSave}>Kaydet</button>
        </main>
    );
};

export default CharacterCustomization;
