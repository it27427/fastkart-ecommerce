const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
} = require('@root/controllers/auth/auth.controller');

const { authMiddleware } = require('@root/middlewares/auth.middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
