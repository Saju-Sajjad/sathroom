const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://davbabu1122:davbabu@cluster0.upsfbmc.mongodb.net/Sathroom';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('connected', () => {
  console.log('MongoDB connected successfully');
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = mongoose;
