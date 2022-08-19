require('./config/mongoose.config');

const express = require('express');

const app = express();

const cors = require('cors')

const cookieParser = require('cookie-parser');

app.use(cookieParser());

// load .end file so it can be used everywhere in our server. now all the variables in the .env file are avaiable to use
require('dotenv').config();



// Change the app.use(cors()) to the one below. add the ability to use credentials with cookies
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// app.use(cors())    
app.use(express.json());                           
app.use(express.urlencoded({ extended: true })); 

require('./routes/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})






// const myFirstSecret = process.env.FIRST_SECRET_KEY;
