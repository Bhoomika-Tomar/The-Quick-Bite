import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Bhoomika-Tomar:mongodbatlas@cluster0.gwdtf.mongodb.net/food-delivery-website').then(()=>console.log("DB CONNECTED"));
}
