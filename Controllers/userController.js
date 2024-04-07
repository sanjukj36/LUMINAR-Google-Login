const users=require("../Models/userModel")
const jwt = require('jsonwebtoken')

// register
exports.register=async(req,res)=>{
    console.log("Inside Register Request!!!");
    const {username,email,password}=req.body
    console.log(username,email,password);
   try{ //check email is present in database or not
        const existingUser=await users.findOne({email})
          //if email is present then existing user
          console.log(existingUser);
        if(existingUser){
            res.status(406).json("User Already Exists")
        }else{
          //else store /insert data to db
            const newUser=new users({
                username,email,password
            })
            //to store data to mongodb from mongoose model
            await newUser.save()
            res.status(200).json(newUser)
        }
}catch(err){
    res.status(401).json(err)

}
}

// login
exports.login =async(req,res)=>{
    console.log("Inside Login function");
    // get email password from req
    const {email,password}=req.body
    console.log(email,password);
    try{
        //check email is present DB or not
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            // generate Token
            const token =jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            // user can login
            res.status(200).json({existingUser,token})
        }else{
            res.status(400).json("Incorrect Email Or Password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}