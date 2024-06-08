// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//     name: String,
//     phone: Number,
//     category:String,
//     description:String,
//     userId:String,
//     image:String
// });

// module.exports = mongoose.model("bookService", bookingSchema);

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  category: String,
  address:String,
  description: String,
  serviceTakerId: String,
  serviceProviderId:String,
  image: String
});

module.exports = mongoose.model("bookings", bookingSchema);
