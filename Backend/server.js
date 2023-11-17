const express = require('express');
const userRoutes = require('./Routes/UserRoutes');
const dbconfig = require('./db');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

// Use middleware before defining routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const roomRoute = require('./Routes/roomsRoute');
const bookingRoute = require('./Routes/bookingRoute');
app.use('/api/room', roomRoute);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoute); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
