const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select(
      "name description address id"
    );

    res.status(500).json({ msg: "Server error, please try again" });
    return;

    if (restaurants) {
      res.json(restaurants);
    } else {
      res.status(404);
      throw new Error("Restaurants not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error, please try again" });
  }
});

module.exports = router;
