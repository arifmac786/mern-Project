import mongoose from 'mongoose';
import { mongoDbUri } from './dotenvConfig.js';
// import { mongoURI  } from '../index.js';
const connectDB = async () => {
    // console.log(mongoDbUri);
    //  console.log(process.env.MONGO_URI);
    try {
        const connectionInstance = await mongoose.connect(mongoDbUri);
        console.log('MongoDB connected successfully', '!! DB HOST : ', connectionInstance.connection.host);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;