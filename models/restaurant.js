const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  restaurant_name: {
    type: String,
    trim: true,
  },
  chain: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  phone_number: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  id: {
    type: Number,
    trim: true,
  },
  vegan: {
    type: Boolean,
  },
  approved: {
    type: Boolean,
  },
  label_approved: {
    type: Boolean,
  },
});

module.exports = mongoose.model("restaurant", RestaurantSchema);
