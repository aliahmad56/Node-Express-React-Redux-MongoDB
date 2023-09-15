// models/restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  phoneNumber:String,
  location:String
});

module.exports = mongoose.model('restaurants', restaurantSchema);


