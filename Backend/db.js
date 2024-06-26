require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.DB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB ");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};
module.exports = connectDB;
