const dotenv = require('dotenv');
dotenv.config();

const dev = {
  app: {
    port: process.env.PORT || 8080,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/FastKart',
  },
  token: {
    key: process.env.SECRET_KEY || 'CLIENT_SECRET_KEY',
  },
};

module.exports = dev;
