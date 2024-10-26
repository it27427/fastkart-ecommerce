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

const app = express();

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3000',
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

app.get('/', (req, res) => {
  res.send('<h1>Hello from home route</h1>');
});

module.exports = app;
