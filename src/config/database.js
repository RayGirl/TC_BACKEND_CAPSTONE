import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to the database");
  } catch (err) {
    console.log("Could not connect to the database. Exiting now!", err);
    process.exit(1);
  }
};
export default connectDB;