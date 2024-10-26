const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
require('colors');
require('module-alias/register');

const connectDB = require('./config/db');

connectDB();

/** IMPORT-ROUTES **/
const authRouter = require('./routes/auth/auth.routes');
const productsRouter = require('./routes/admin/products.routes');

const app = express();

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// ROUTES
app.use('/api/auth', authRouter);
app.use('/api/admin/products', productsRouter);

module.exports = app;
