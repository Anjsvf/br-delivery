import mongoose from "mongoose";
 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://antonio2025:13418350@cluster0.6d9cipg.mongodb.net/food-del').then(()=>console.log('DB conectado!!'))
}