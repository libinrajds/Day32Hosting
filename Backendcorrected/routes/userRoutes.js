// const express=require('express'); 
// const router=express.Router(); 

// router.use(express.json())   //express.json is a third party middleware
// router.use(express.urlencoded ({extended:true}))
// const employeeModel=require('../model/userData')







// router.post('/adduser',async(req,res)=>{
//     try {
//         var item=req.body;
//         const data=new userModel(item);
//         await data.save();
//         res.redirect('/user')
//     } catch (error) {
//         res.status(404).send('Post unsuccessfull!')
//     }

// })
// module.exports=userRoutes



const express=require('express');
const router= express.Router();
router.use(express.json());
// const userModel=require('../model/userData');
// const jwt=require('jsonwebtoken');
router.use(express.urlencoded ({extended:true}))
const userModel=require('../model/userData');
const jwt=require('jsonwebtoken');


router.post('/login',async(req,res)=>{


try {const user=await userModel.findOne({email:req.body.email})
if(!user){
    res.status(404).send({message:'User not found'})
}else{
    if (user.password==req.body.password){
        const payload={email:user.email,password:user.password}
        const token=jwt.sign(payload,'blogapp');//blog app is the secret key
        res.status(200).send({message:'Login Successful',jtoken:token})//jtoken can be given any name that token is from const token
    }else{
        res.status(404).send({message:'Invalid credentials'})
}
    
}} catch (error) {
    res.status(404).send({message:'Error in server'})  
}





})



    
// const user= await userModel.findOne({email:req.body.email});
// if(!user){
//     res.status(404).send({message:'User not found'});
// }
// try {
//     if(user.password==req.body.password){
//         const payload={email:user.email,password:user.password};
//         const token=jwt.sign(payload,'blogApp');
//         res.status(200).send({message:'Login successful',token:token})
//     }
//     else{
//         res.status(400).send({message:'Invalid credentials'})
//     }
// } catch (error) {
//     console.log(error);
// }
// })
module.exports=router;

