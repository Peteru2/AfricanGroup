const express = require('express');
const cors = require('cors');
const http = require('http');
    const { postQuote, postNewsLetter, getQuotes }= require("./controller.js")

const connectDB = require('./db.js');
// const Controller = require('./src/Backend/controller/verifyController.js');
// const authMiddleware = require('./src/Backend/auth.js');

const app = express();
const server = http.createServer(app); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB().then(() => {
  server.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
});

// Socket.IO logic


app.post('/request-quote', postQuote);
app.post('/newsletter', postNewsLetter)
app.get('/getquotes', getQuotes)


// app.post('/Login', Controller.Post_login);
// app.post('/verifyOTP', Controller.verifyOTP);

// app.all('*', authMiddleware)

// app.get('/', authMiddleware, Controller.Get_user);
// app.put('/updateTransactionPin', authMiddleware, Controller.UpdateTransPin);
// app.put('/updatekyc', authMiddleware, Controller.UpdateKyc);
// app.get('/balance', authMiddleware, Controller.GetBalance);
// app.post('/val_transfer', authMiddleware, Controller.Check_transfer);
// app.post('/transfer', authMiddleware, Controller.Post_transfer);
// app.get('/trans-history', authMiddleware, Controller.Transfer_history);