# Quest of Hearts

Quest of Hearts, çiftlerin birbirlerine olan sevgilerini güçlendirmek için eğlenceli bir kaçış odası oyunudur. Her seviyede farklı bilmeceleri çözerek ilerleyin ve sonunda sevgilinizi kurtarın.

## Proje Yapısı

quest-of-hearts/
├── backend/
│ ├── config/
│ │ ├── createDatabase.js
│ │ └── sequelize.js
│ ├── controllers/
│ │ ├── userController.js
│ │ ├── questionController.js
│ │ ├── paymentController.js
│ └── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Question.js
│ └── routes/
│ │ ├── userRoutes.js
│ │ ├── questionRoutes.js
│ │ ├── paymentRoutes.js
│ └── server.js
├── frontend/
│ ├── public/
│ │ ├── assets/
│ │ │ ├── logo.png
│ │ │ ├── escape_room_background_level_1.png
│ │ │ ├── escape_room_background_level_2.png
│ │ │ ├── escape_room_background_level_3.png
│ │ │ ├── escape_room_background_level_4.png
│ │ │ ├── escape_room_background_level_5.png
│ │ │ ├── escape_room_background_level_6.png
│ │ │ ├── escape_room_background_level_7.png
│ │ │ ├── escape_room_background_level_8.png
│ │ │ ├── escape_room_background_level_9.png
│ │ │ ├── escape_room_background_level_10.png
│ │ │ ├── avatar_character.png
│ │ │ ├── key.png
│ │ │ ├── door.png
│ ├── src/
│ │ ├── actions/
│ │ │ ├── userActions.js
│ │ │ ├── paymentActions.js
│ │ │ ├── questionActions.js
│ │ ├── components/
│ │ │ ├── Header.js
│ │ │ ├── Footer.js
│ │ │ ├── Home.js
│ │ │ ├── Register.js
│ │ │ ├── Login.js
│ │ │ ├── Payment.js
│ │ │ ├── UploadQuestions.js
│ │ │ ├── GamePlay.js
│ │ │ ├── PlayGame.js
│ │ │ ├── FeedbackForm.js
│ │ │ ├── Help.js
│ │ ├── reducers/
│ │ │ ├── userReducer.js
│ │ │ ├── paymentReducer.js
│ │ │ ├── questionReducer.js
│ │ ├── store.js
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── styles.css
└── README.md


## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v14 veya üstü)
- PostgreSQL (veritabanı için)

### Adımlar

1. **Veritabanını Oluşturma:**

   PostgreSQL'i başlatın ve `quest_of_hearts_db` adında bir veritabanı oluşturun.

   ```sh
   node backend/config/createDatabase.js


2. **Backend Sunucusunu Başlatma:**

    Backend klasörüne gidin ve gerekli paketleri yükleyin.

    cd backend
npm install

.env dosyasını oluşturun ve aşağıdaki değişkenleri ekleyin:

env

JWT_SECRET=your_jwt_secret_key

Sunucuyu başlatın.

sh

node server.js

Frontend Sunucusunu Başlatma:

Frontend klasörüne gidin ve gerekli paketleri yükleyin.

sh

    cd frontend
    npm install
    npm start

Kullanım
Kayıt Olma ve Giriş Yapma

    Kullanıcılar kayıt olabilir ve giriş yapabilir.
    Kayıt olurken e-posta, şifre ve ilişki bilgileri istenir.

Bilmece Yükleme

    Kullanıcılar, ilişki bilgilerini kullanarak bilmeceler ve cevaplar yükleyebilir.

Oyun Oynama

    Kullanıcılar, bilmeceleri çözerek odadan kaçmaya çalışır.
    Her seviyede farklı bir bilmece bulunur.
    Anahtar bulunarak bir sonraki seviyeye geçilir.

Ödeme

    Kullanıcılar, oyun içinde ödeme yapabilir (simüle edilmiştir).

Geri Bildirim

    Kullanıcılar, geri bildirim formu aracılığıyla geri bildirimde bulunabilir.

Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin. Herhangi bir sorunuz veya öneriniz varsa, lütfen iletişime geçin.
Lisans

Bu proje MIT lisansı altında lisanslanmıştır.