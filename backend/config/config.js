module.exports = {
    development: {
      username: 'quest_of_hearts_user',
      password: 'password',
      database: 'quest_of_hearts_db',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    test: {
      username: 'quest_of_hearts_user',
      password: 'password',
      database: 'quest_of_hearts_db',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'postgres'
    }
  };
  