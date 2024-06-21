const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    totalServices: {
        type: Number,
        default: 50
    },
    totalServicesRequested: {
        type: Number,
        default: 35
    },
    totalServicesConfirmed: {
        type: Number,
        default: 25
    },
    totalServicesCompleted: {
        type: Number,
        default: 15
    }
});

const Counter = mongoose.model("Counters", serviceSchema);

module.exports = Counter;
