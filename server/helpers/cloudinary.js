const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const config = require('../config/config');

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

const storage = new multer.memoryStorage();

const handleImageUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });

  return result;
};

const upload = multer({ storage });

module.exports = { upload, handleImageUpload };
