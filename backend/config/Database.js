import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL;

    const conn = await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true});

    console.log(`MongoDB Connected Successfully`);

}