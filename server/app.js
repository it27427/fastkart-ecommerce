const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const multer = require('multer');
const morgan = require('morgan');

const connectDB = require('./config/db');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Connect to the database
connectDB();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

module.exports = app;
