const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsLetterSchema = new Schema({
    email: {
        type: String,
        required: true,
    },   
})

const LetterEmail = mongoose.model('Newsletter', newsLetterSchema);
module.exports = { LetterEmail };