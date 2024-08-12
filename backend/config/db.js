import mongoose from "mongoose";

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://lesson:lesson@cluster0.whihq3q.mongodb.net/food-del').then(()=>console.log('db connected')).catch(()=>console.log('error connect'))
}

export default connectDB