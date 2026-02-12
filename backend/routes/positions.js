const express = require("express");
const router = express.Router();
const { PositionsModel } = require("../model/PositionsModel");

router.get("/",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
})


module.exports = router;