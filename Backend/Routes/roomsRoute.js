const express = require('express');
const router = express.Router();
const Room = require('../Modals/room');

router.get('/getallroom', async (req, res) => {
    try {
        const rooms = await Room.find({});
        res.send(rooms)
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/getroombyid/:roomid', async (req, res) => {
    const roomid = req.params.roomid;
    try {
        const room = await Room.findOne({ _id: roomid });
        res.send(room);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
