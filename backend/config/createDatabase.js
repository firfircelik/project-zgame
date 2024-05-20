const { Client } = require('pg');

const createDatabase = async () => {
    const client = new Client({
        user: 'your_username',
        host: 'localhost',
        password: 'your_password',
        port: 5432,
    });

    try {
        await client.connect();
        await client.query('CREATE DATABASE quest_of_hearts_db');
        console.log('Veritabanı oluşturuldu');
    } catch (err) {
        if (err.code === '42P04') {
            console.log('Veritabanı zaten mevcut');
        } else {
            console.error('Veritabanı oluşturulamadı', err);
        }
    } finally {
        await client.end();
    }
};

createDatabase();
