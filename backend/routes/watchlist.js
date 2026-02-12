const express = require("express");
const router = express.Router();
const { WatchlistModel } = require("../model/WatchlistModel");

router.get("/", async (req, res) => {
  try {
    const watchlist = await WatchlistModel.find({});
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
