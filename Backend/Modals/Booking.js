const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  room: {
    type: String,
    required: true,
  },
  roomId: {
    type:String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  totalDays: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'booked',
  },
}, {
  timestamps: true, 
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
