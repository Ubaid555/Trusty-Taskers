const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    confirmPassword: String,
    image: String 
});

module.exports = mongoose.model("loginusers", userSchema);