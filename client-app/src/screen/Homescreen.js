// Homescreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import { DatePicker } from 'antd';
import { format } from 'date-fns'; // Import the 'format' function from date-fns
import Error from '../components/Error';

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { RangePicker } = DatePicker;
  const [formattedStartDate, setFormattedStartDate] = useState(); // Fix typo here
  const [formattedEndDate, setFormattedEndDate] = useState(); // Fix typo here

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/room/getallroom');
        const data = response.data;
        setRooms(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function filterDate(dates) {
    if (dates && dates[0] && dates[1]) {
      const startDate = format(new Date(dates[0]), 'dd-MM-yyyy');
      const endDate = format(new Date(dates[1]), 'dd-MM-yyyy');
      setFormattedStartDate(startDate);
      setFormattedEndDate(endDate);
      console.log(startDate);
      console.log(endDate);
    } else {
      console.error('Invalid date range');
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-3'>
          <RangePicker format='DD-MM-YYYY' onChange={filterDate} />
        </div>
        {loading && <Loader />}
        {rooms.length > 0 && !loading && !error && (
          rooms.map((room) => (
            <div className='col-md-9 mt-2' key={room.id}>
              <Room room={room} formattedStartDate={formattedStartDate} formattedEndDate={formattedEndDate} />
            </div>
          ))
        )}
        {error && !loading && <Error />}
      </div>
    </div>
  );
};

export default Homescreen;
