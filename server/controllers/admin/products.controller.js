const { handleImageUploader } = require('../../helpers/cloudinary');

/** HANDLE PRODUCT-IMAGE UPLOAD **/
const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const url = 'data:' + req.file.mimetype + ';base64,' + b64;
    // const url = `data:${req.file.mimetype};base64,${b64}`;
    const result = await handleImageUploader(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: 'Some error occurred',
    });
  }
};

/** ADD A NEW PRODUCT **/
const addProduct = async (req, res) => {};

/** GET ALL-PRODUCTS **/
const getAllProducts = async (req, res) => {};

/** UPDATE PRODUCT **/
const updateProduct = async (req, res) => {};

/** DELETE PRODUCT **/
const deleteProduct = (req, res) => {};

module.exports = {
  handleImageUpload,
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
