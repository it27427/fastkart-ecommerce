const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
require('module-alias/register');
const cloudinary = require('cloudinary');
const jsonwebtoken = require('jsonwebtoken');
const multer = require('multer');

const authRouter = require('@root/routes/auth.routes');

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
app.use(morgan('dev'));

// Connect to the database
connectDB();

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

module.exports = app;
