const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select(
      "name description address id"
    );

    console.log(1);

    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = router;
