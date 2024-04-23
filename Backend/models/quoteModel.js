const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    business    : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true
    },
    project:{
        type: String,
        required: true
    },
    message: {
        type: String,
    },
   
})

const Quote = mongoose.model('Quote', quoteSchema);
module.exports ={
     Quote
     };