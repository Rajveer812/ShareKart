const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../model/OrdersModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { userVerification } = require("../Middlewares/Authorization");

// Middleware to ensure req.user is set (should be added in your app.js or main server file)
// Example: app.use(authMiddleware) where authMiddleware sets req.user = { _id: ... }

// Get all orders, populated with author details
router.get("/",userVerification, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).populate("author");
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const author = req.user._id;

    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode, author });
    await newOrder.save();

    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name, author });

      if (!holding) {
        holding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
          author,
        });
      } else {
        const totalQty = holding.qty + qty;
        const totalCost = holding.avg * holding.qty + price * qty;

        holding.avg = Number((totalCost / totalQty).toFixed(2));
        holding.qty = totalQty;
        holding.price = price;
      }

      await holding.save();
    }

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place a new order
/* router.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    // Get author from authenticated user (not from client)
    const author = req.user && req.user._id;
    // basic validation
    if (!name || qty == null || price == null || !mode || !author) {
      return res.status(400).json({ message: "Invalid order data " });
    }

    // Save order
    const newOrder = new OrdersModel({ name, qty, price, mode, author });
    await newOrder.save();
    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}); */

// Place a buy order and update holdings
/* router.post("/buyOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const author = req.user && req.user._id;

    // basic validation
    if (!name || qty == null || price == null || !mode || !author) {
      return res.status(400).json({ message: "Invalid order data or missing author" });
    }

    // Save the order
    const newOrder = new OrdersModel({ name, qty, price, mode, author });
    await newOrder.save();

    let holding = await HoldingsModel.findOne({ name, author });
    if (mode === "BUY") {
      if (!holding) {
        holding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
          author,
        });
      } else {
        const totalQty = holding.qty + qty;
        const totalCost = holding.avg * holding.qty + price * qty;
        holding.avg = Number((totalCost / totalQty).toFixed(2));
        holding.qty = totalQty;
        holding.price = price;
      }
      await holding.save();
    }
    res.status(201).json({ message: "Buy order placed and holdings updated", order: newOrder, holding });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}); */

module.exports = router;
