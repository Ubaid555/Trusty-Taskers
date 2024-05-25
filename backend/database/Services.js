const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    category:String,
    price:Number,
    description:String,
    userId:String
});

module.exports = mongoose.model("services", serviceSchema);