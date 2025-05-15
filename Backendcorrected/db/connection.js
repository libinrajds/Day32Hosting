const mongoose=require('mongoose');  
require('dotenv').config()

//Connecting db
mongoose.connect(process.env.mongodb_url).then(()=>{
    console.log('Connection established')
}).catch(()=>{
    console.log('Connection error')
})