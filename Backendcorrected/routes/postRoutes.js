// const express=require("express")
// const router=express.Router();
// // const jwt=require('jsonwebtoken')
// const posts=require('../model/blogData')
// router.use(express.json());
// const jwt=require('jsonwebtoken');

// router.use(express.json());
// function verifytoken(req,res,next){
// const token=express.request.headers.token;
// try {
//     if(!token) throw'Unauthorized access'
//     else{
//         const payload=jwt.verify(token,'blogApp');
//         if(!payload) throw'Unauthorized Access';
//         next();
//     }
// } catch (error) {
//     console.log(error);
    
// }
// }


// // function verifytoken(req,res,next){
// //     let token=req.headers.token;
// //     try {
// //         if(!token) throw "Unauthorized access"
// //         else{
// //             let payload=jwt.verify(token,'blogApp');
// //             if(!payload) throw 'Unauthorized access';
// //             next();
// //         }
// //     } catch (error) {
// //         console.log(error)
// //     }

// // }

// router.get('/',verifytoken, async (req, res) => {
//     try {
//         const data = await posts.find();
//         res.status(200).send(data);  
//     } catch (error) {
//         res.status(400).send('Data not found');  
//     }
// });
// // router.post('/add',async(req,res)=>{
// //     try {
// //        const post=req.body;
// //        const data=await posts(post).save();
// //        res.status(200).send({message:"blog added"})
// //        console.log(data)
// //     } catch (error) {
// //         console.log(error)
// //     }
// // })
// router.post('/add', verifytoken,async (req, res) => {
//     try {
//        const post = req.body;
//        const data = await posts(post).save();
//        res.status(200).send({ message: "blog added" });
//        console.log(data);
//     } catch (error) {
//         console.log(error);
//     } 
// });

// module.exports=router

const express=require('express'); 
const router=express.Router(); 
const posts=require("../model/blogData");
const jwt=require ('jsonwebtoken');
router.use(express.json()) ;
function verifytoken(req,res,next){
    const token=req.headers.token;
    try {
        if(!token) throw 'Unauthorized access'
        else{
            const payload=jwt.verify(token,'blogapp');
            if(!payload) throw 'Unauthorized access'
            next()
        }
    } catch (error) {
        console.log(error);
    }
}

router.get('/',verifytoken, async (req, res) => {
    try {
        // Fetch all blog posts from the database
        const data = await posts.find();
        res.status(200).send(data);  // Send the blog data in the response
    } catch (error) {
        res.status(400).send('Data not found');  // Handle errors
}
});

router.post('/add',verifytoken, async (req, res) => {
    try {
       const post = req.body;
       const data = await posts(post).save();
       res.status(200).send({ message: "blog added" });
       console.log(data);
    } catch (error) {
        console.log(error);
    } 
});
router.put('/edit/:id',verifytoken, async (req, res) => {
    try {
        const id = req.params.id;
        await posts.findByIdAndUpdate(id, req.body);
        res.status(200).send({ message: "Blog updated!" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to update blog");
    }
});
router.delete('/delete/:id',verifytoken, async (req, res) => {
    try {
        const id = req.params.id;
        await posts.findByIdAndDelete(id);  
        res.status(200).send({ message: "Blog removed!!" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to remove the blog");
    }
});

module.exports=router;