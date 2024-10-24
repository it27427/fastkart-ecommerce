const express = require('express');
const router = express.Router();

const {
  registerController,
} = require('@root/controllers/auth/Auth.Controller');

router.post('/register', registerController);

module.exports = router;
