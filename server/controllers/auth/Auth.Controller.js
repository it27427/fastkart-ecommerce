const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('@root/models/user.model');

/** REGISTER-CONTROLLER **/
const registerController = async (req, res) => {
  const { userName, email, phone, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: 'Registration Successfully Done!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

/** LOGIN-CONTROLLER **/
const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

/** LOGOUT-CONTROLLER **/
const logoutController = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

/** AUTH-MIDDLEWARE **/
const authMiddleware = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

module.exports = {
  registerController,
};
