import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { differenceInDays, parse } from 'date-fns';

const BookingScreen = () => {
  const { roomid, formattedStartDate, formattedEndDate } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalDays, setTotalDays] = useState(0);
  const [rentPerDay, setRentPerDay] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post(`/api/room/getroombyid/${roomid}`);
        setRoom(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [roomid, formattedStartDate, formattedEndDate]);

  useEffect(() => {
    if (formattedStartDate && formattedEndDate && room) {
      const startDate = parse(formattedStartDate, 'dd-MM-yyyy', new Date());
      const endDate = parse(formattedEndDate, 'dd-MM-yyyy', new Date());
      const days = differenceInDays(endDate, startDate) + 1;
      setTotalDays(days);
    }
  }, [formattedStartDate, formattedEndDate, room]);

  useEffect(() => {
    if (room && room.rentperday && totalDays) {
      const totalRent = room.rentperday * totalDays;
      setRentPerDay(totalRent / totalDays);
      setTotalAmount(totalRent);
      console.log('Rent Per Day:', rentPerDay);
    }
  }, [room, totalDays]);

  async function bookroom() {
    // Get user information from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (!currentUser || !currentUser._id) {
      console.error('User not logged in.');
      // Handle the case when the user is not logged in.
      return;
    }

    const bookingDetails = {
      room: room._id, // Assuming room has an _id property
      user: currentUser._id,
      userId: currentUser._id, // Use the appropriate value for userId
      startDate: formattedStartDate, // Use the appropriate value for startDate
      endDate: formattedEndDate, // Use the appropriate value for endDate
      totalDays,
      totalAmount,
      transactionId: '', // Use the appropriate value for transactionId
    };

    try {
      const response = await axios.post('/api/bookings/bookroom', bookingDetails);
      console.log('Booking successful:', response.data);
      // Handle success, e.g., redirect to a confirmation page
    } catch (error) {
      console.error('Booking failed:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  }

  return (
    <div className='container mt-5'>
      {loading ? (
        <Loader />
      ) : (
        <div className='row'>
          <div className='col-md-6'>
            {room && (
              <>
                <h1>{room.name}</h1>
                <img src={room.imageurl[0]} className='img-fluid mb-4 bigimg' alt='Room' />
              </>
            )}
          </div>
          <div className='col-md-6'>
            <div className='booking-details'>
              <h1>Booking Details</h1>
              <hr />
              <div className='mb-3'>
                <label htmlFor='name'>Name:</label>
              </div>

              <div className='mb-3'>
                <label htmlFor='fromDate'>From date: {formattedStartDate}</label>
              </div>

              <div className='mb-3'>
                <label htmlFor='toDate'>To date: {formattedEndDate}</label>
              </div>

              <div className='mb-3'>
                {room && <p><strong>Max Count:</strong> {room.maxcount}</p>}
              </div>

              {room && (
                <div className='amount-details'>
                  <h1>Amount:</h1>
                  <hr />
                  <p>
                    <strong>Rent Per day :</strong> {rentPerDay}
                  </p>
                  <p>Total Days: {totalDays}</p>
                  <p>Total Amount: {totalAmount}</p>
                </div>
              )}

              <div className='mt-3'>
                <button className='btn btn-primary' onClick={bookroom} >
                  play Know
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className='col-md-12' style={{ textAlign: 'center' }}>
          <Error message="Failed to load room details. Please try again later or contact support." />
        </div>
      )}
    </div>
  );
};

export default BookingScreen;
