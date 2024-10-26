const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const config = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

const multer = new multer.memoryStorage();

const handleImageUpload = async () => {};
