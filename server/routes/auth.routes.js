const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require('@root/controllers/auth/auth.controller');

const { authMiddleware } = require('@root/middlewares/auth.middleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get('/check-user', authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: 'Authenticated user!',
    user,
  });
});

module.exports = router;
