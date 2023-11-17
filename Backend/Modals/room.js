const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    maxcount: {
        type: Number,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    rentperday: {
        type: Number,
        required: true,
    },
    imageurl: [],
    currentbooking: [],
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const room = mongoose.model('Room', roomSchema);

module.exports = room;
