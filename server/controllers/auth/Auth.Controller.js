const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('@root/models/user.model');
const config = require('@root/config/config');
const { handleResponse } = require('@root/helpers/handleresponse');

/** REGISTER-CONTROLLER **/
const registerUser = async (req, res) => {
  const { userName, email, phone, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      handleResponse(
        res,
        409,
        'User already exists! Please try with another unique e-mail.'
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    handleResponse(res, 201, true, 'Registration Successfully Done!');
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, error);
  }
};

/** LOGIN-CONTROLLER **/
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      handleResponse(res, 404, "User doesn't exist! Please register first.");
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );

    if (!checkPasswordMatch) {
      handleResponse(res, 401, 'Invalid password! Please try again.');
    }

    const secretKey = config.token.key;
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
      },
      secretKey,
      { expiresIn: '120m' }
    );

    res
      .cookie('token', token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        success: true,
        message: 'Logged in successfully!',
        user: {
          email: checkUser.email,
          role: checkUser.role,
          id: checkUser._id,
        },
      });
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, error);
  }
};

/** LOGOUT-CONTROLLER **/
const logoutUser = (req, res) => {
  try {
    res.clearCookie('token').status(200).json({
      success: true,
      message: 'Logged out successfully!',
    });
  } catch (error) {
    console.error('Error: ', error);
    handleResponse(res, 500, error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
