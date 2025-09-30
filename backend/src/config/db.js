import mongoose from "mongoose";
export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected successfuly");
        
    } catch (error) {
        console.error("Errorn in connecting to mongoDB");
        process.exit(1);
        
    }
}