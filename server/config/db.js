const mongoose = require('mongoose');
const colors = require('colors');

const dbURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log('Database Connected Successfully.'.bgCyan);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
