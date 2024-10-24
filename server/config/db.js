const mongoose = require('mongoose');
const config = require('./config');

const dbURL = config.db.url;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log(`Database Connected Successfully!`.bgMagenta);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

module.exports = connectDB;
