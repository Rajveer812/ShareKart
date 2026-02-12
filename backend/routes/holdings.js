const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");
const { userVerification } = require("../Middlewares/Authorization");

router.get("/",userVerification,async(req,res)=>{
    try{
        let allHoldings=await HoldingsModel.find({}).populate("author");
        res.json(allHoldings);
    }catch (err) {
    res.status(500).json({ error: err.message });
  }
})

module.exports = router;