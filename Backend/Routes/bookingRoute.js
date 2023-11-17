const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/bookroom', async (req, res) => {
  const {
    room,
    userId,
    startDate,
    endDate,
    totalDays,
    totalAmount,
    transactionId,
  } = req.body;

  try {
    const savedBooking = await bookingController.bookRoom(room, userId, startDate, endDate, totalDays, totalAmount, transactionId);

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
