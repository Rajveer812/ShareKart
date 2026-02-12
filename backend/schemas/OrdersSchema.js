const {Schema}= require("mongoose");
const  OrdersSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
});
module.exports={
    OrdersSchema
};