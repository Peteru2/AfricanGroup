const { Quote } = require("./models/quoteModel");
const { LetterEmail }= require("./models/newsLetterModel")

const postQuote = async (req, res) => {
    try {
        const { fullname, email, business, phoneNumber, project, message } = req.body;
        const newQuote = new Quote({
            fullname,
            email,
            business,
            phoneNumber,
            project,
            message
        });
        await newQuote.save();   
        return res.status(200).json({ message: 'Quote Successfully Submitted' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while creating quote' });
    }
}
const postNewsLetter = async (req, res) => {
    try {
        const { email   } = req.body;
        const newEmail = new LetterEmail({
            email
        });
        const check =  await LetterEmail.findOne({email:email})
        if(check){
            return res.status(401).json({ error: 'Email already exist' })
        }
        await newEmail.save();   
        return res.status(200).json({ message: 'Newsletter submitted succesfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while creating quote' });
    }
}
const getQuotes = async (req, res) => {
    try {
       
        const quotes =  await Quote.find()
        if(quotes){
            console.log(quotes)
            return res.status(200).json({ quotes, message: 'Quotes Data gotten successfully' });
        }
       
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while creating quote' });
    }
}
module.exports = {
    postQuote,
    postNewsLetter,
    getQuotes
};
