const Product = require('@root/models/product.model');
const { handleImageUploader } = require('@root/helpers/cloudinary');
const { handleResponse } = require('@root/helpers/handleresponse');

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
const addProduct = async (req, res) => {
  const {
    image,
    title,
    description,
    category,
    brand,
    size,
    color,
    price,
    salePrice,
    totalStock,
  } = req.body;

  try {
    /** CREATE NEW-PRODUCT **/
    const newProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      size,
      color,
      price,
      salePrice,
      totalStock,
    });

    /** SAVE PRODUCT **/
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: 'Product Created Successfully!',
      data: newProduct,
    });
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, 'Internal server error', error);
  }
};

/** GET ALL-PRODUCTS **/
const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      data: listOfProducts,
    });
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, 'Internal server error', error);
  }
};

/** UPDATE PRODUCT **/
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      brand,
      size,
      color,
      price,
      salePrice,
      totalStock,
    } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct) handleResponse(res, 404, 'Product not found!');

    /** UPDATE-PRODUCT **/
    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.size = size || findProduct.size;
    findProduct.color = color || findProduct.color;
    findProduct.price = price === '' ? 0 : price || findProduct.price;
    findProduct.salePrice =
      salePrice === '' ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;

    await findProduct.save();
    res.status(200).json({
      success: true,
      message: 'Product Updated Successfully!',
      data: findProduct,
    });
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, 'Internal server error', error);
  }
};

/** DELETE PRODUCT **/
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) handleResponse(res, 404, 'Product not found!');

    handleResponse(res, 200, true, 'Product deleted successfully!');
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, 'Internal server error', error);
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  updateProduct,
  deleteProduct,
};
