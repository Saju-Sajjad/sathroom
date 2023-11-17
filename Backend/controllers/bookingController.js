const Booking = require('../Modals/Booking');

const bookRoom = async (room, userId, startDate, endDate, totalDays, totalAmount, transactionId) => {
  try {
    const newBooking = new Booking({
      room,
      userId,
      startDate,
      endDate,
      totalDays,
      totalAmount,
      transactionId,
      status: 'booked', // Assuming you want to set a default status
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    return savedBooking;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  bookRoom,
};
