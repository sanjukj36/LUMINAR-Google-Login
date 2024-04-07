const express =require("express")
const userController=require("../Controllers/userController")


const router= new express.Router()

// register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// export router
module.exports=router
