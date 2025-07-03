import mongoose from "mongoose";

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.Mongo_Url);
        console.log('✅ MongoDB connected');
    }catch (err){
        console.error('❌ MongoDB connection failed:', err.message);
    }
}

export default connectDb;