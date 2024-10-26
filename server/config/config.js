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
  cloudinary: {
    cloudName: process.env.CLOUD_NAME,
    apiKey: process.env.CLOUD_API_KEY,
    apiSecret: process.env.CLOUT_API_SECRET,
    cloudinaryURL: process.env.CLOUDINARY_URL,
  },
};

module.exports = dev;
