import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
            console.log("Successfully connected to the database"); // log connection success message
        } catch(err) {
            console.log('Could not connect to the database. Exiting now!', err); //log connection error message if it exists
            process.exit(1); //close
    }
};
export default connectDB;