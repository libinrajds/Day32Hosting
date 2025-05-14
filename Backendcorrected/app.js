// server.js (assuming this is your main server file)
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const postRoute = require('./routes/postRoutes');
const userRoute=require('./routes/userRoutes')
require('dotenv').config(); // Load environment variables
require('./db/connection'); // Establish database connection

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/blog', postRoute);
app.use('/user',userRoute)
// app.use('/user', userRoute);
// app.use('/user', userR) 

app.listen(process.env.PORT, () => {
    console.log(`Server is Successfully running on PORT ${process.env.PORT}`);
});