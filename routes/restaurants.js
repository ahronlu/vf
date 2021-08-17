const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select(
      "name description address id"
    );

    res.json({ success: true, list: restaurants });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Server error, please try again" });
  }
});

module.exports = router;
