const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const User = require('@root/models/user.model');
const config = require('@root/config/config');

/** REGISTER-CONTROLLER **/
const registerUser = async (req, res) => {
  const { userName, email, phone, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });

    if (checkUser)
      return res.json({
        success: false,
        message: 'User already exists! Please try with another unique e-mail.',
      });

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
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });

    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exists! Please register first.",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );

    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: 'Invalid password! Please try again.',
      });

    const secretKey = config.token.key;
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        password: checkUser.password,
      },
      secretKey,
      { expiresIn: '30m' }
    );

    res.cookie('token', token, { httpOnly: true, secure: false }).json({
      success: true,
      message: 'Logged in successfully!',
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

/** LOGOUT-CONTROLLER **/
const logout = (req, res) => {
  try {
    const clearCookie = res.clearCookie('token').json({
      success: true,
      message: 'Logged out successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Some error occured',
    });
  }
};

/** AUTH-MIDDLEWARE **/
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.json({
      success: false,
      message: 'Unauthorized User!',
    });

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: 'Unauthorized User!',
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logout,
};
