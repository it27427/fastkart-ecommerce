const express = require('express');
const router = express.Router();

const { registerController } = require('../controllers/auth/auth.controller');

router.post('/register', registerController);

module.exports = router;
