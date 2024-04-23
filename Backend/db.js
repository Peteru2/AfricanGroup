const mongoose = require('mongoose');
const uri = "mongodb+srv://afriquotes:12afriquotes@cluster0.to9arvf.mongodb.net/afriquotes?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB ");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
};

module.exports = connectDB;
