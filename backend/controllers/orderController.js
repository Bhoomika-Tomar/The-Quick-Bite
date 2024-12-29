import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';



//PLACING USER ORDER FOR FRONTEND
const placeOrder = async (req, res) => {

const frontend_url = "http://localhost:5173";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
await newOrder.save();
await userModel.findByIdAndUpdate (req.body.userId,{cartData:{}}
)

    } catch (error) {
        console.log (error)
        res.json ({success:false,message:"Error"})
    }
}


//USER ORDERS FOR FRONTEND
const userOrders = async (req,res) =>{
try {
    const orders = await orderModel.find({userId:req.body.userId});
    res.json({success:true,data:orders})
} catch (error) {
    console.log(error);
    res.json ({success:false,message:"Error"})
}
}

//LISTING ORDERS FOR ADMIN PANEL
const listOrders = async (req,res) => {
try {
    const orders = await orderModel.find({});
    res.json ({success:true,data:orders})
} catch (error) {
    console.log (error)
    res.json({success:false,message:"Error"})
    
}
}


// API FOR UPDATING ORDER STATUS
const updateStatus = async (req,res) =>{
try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
    res.json({success:true,message:"Status Updated"})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
}
}


export { placeOrder,userOrders,listOrders,updateStatus }
