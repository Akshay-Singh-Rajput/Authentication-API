const mongoose = require('mongoose');
require('dotenv').config();
const colors = require('colors');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log('Successfully connected to database'.green.bold);

  } catch (error) {
    console.error("database connection failed. exiting now...".red.bold);
    console.error('err', error.message.red);
    process.exit(1);
  }
};

module.exports = connectDB;