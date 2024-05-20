import React, { useState } from 'react';

const PhotoUpload = () => {
    const [rescuerPhoto, setRescuerPhoto] = useState(null);
    const [rescuedPhoto, setRescuedPhoto] = useState(null);

    const handlePhotoUpload = (e, setPhoto) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        localStorage.setItem('rescuerPhoto', rescuerPhoto);
        localStorage.setItem('rescuedPhoto', rescuedPhoto);
    };

    return (
        <main>
            <h2>Fotoğraf Yükle</h2>
            <div>
                <label>
                    Kurtarıcı Fotoğrafı:
                    <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, setRescuerPhoto)} />
                </label>
            </div>
            <div>
                <label>
                    Kurtarılan Fotoğrafı:
                    <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, setRescuedPhoto)} />
                </label>
            </div>
            <button onClick={handleSave}>Kaydet</button>
        </main>
    );
};

export default PhotoUpload;
