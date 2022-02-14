const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');
// load .end file so it can be used everywhere in our server. now all the variables in the .env file are avaiable to use
require('dotenv').config();


app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// app.use(cors())    
app.use(express.json());                           
app.use(express.urlencoded({ extended: true })); 

require('./routes/login_reg.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})






// const myFirstSecret = process.env.FIRST_SECRET_KEY;
