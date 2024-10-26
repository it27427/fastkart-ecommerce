const express = require('express');
const router = express.Router();

const {
  handleImageUpload,
} = require('@root/controllers/admin/products.controller');
const { upload } = require('@root/helpers/cloudinary');

router.push('/upload-image', upload.single('my_file', handleImageUpload));

module.exports = router;
