const mongoose = require('mongoose');

const userVerificationSchema = new mongoose.Schema({
    name: String,
    uniqueString: String,
    createdAt: Date,
    expiresAt: Date,
});

module.exports = mongoose.model("UserVerification", userVerificationSchema);
