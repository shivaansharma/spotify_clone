const express = require('express');
const router = express.Router();
const User = require('../model/user')
const {getToken} = require('../utils/helpers')
//post will help to rejeter user
router.post("/register",async (req,res)=>{
  const {firstName,lastName,email,userName,password} = req.body
  
   //checking if the user already exist
   const user = await User.findOne({email:email})
   if(user){
    return res.status(403).json({error:"user already exist"})
   }

   const newUserData = {firstName,lastName,email,userName,password,loggedIn:true}
     
   const newUser = await User.create(newUserData);

   const token = await getToken(email,newUser);

   const userToReturn = {...newUser.toJSON(),token};

   return res.status(200).json(userToReturn)
  
})

router.post('/login',async(req,res)=>{
    const{email,password}= req.body
    const validUser = await User.findOne({email:email})
    if(!validUser){
      return res.status(400).json({err:"invalid user"})
    }
    if(password != validUser.password){
      return res.status(400).json({err:"invalid user"})
    }
     const toReturn = {...validUser.toJSON()}
    return res.status(200).json(toReturn)
})

module.exports  = router

