const express = require('express');
const router = express.Router();

const {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  updateProduct,
  deleteProduct,
} = require('../../controllers/admin/products.controller');
const { upload } = require('../../helpers/cloudinary');

router.post('/upload-image', upload.single('my_file'), handleImageUpload);
router.post('/create', addProduct);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);
router.get('/read', fetchAllProducts);

module.exports = router;
