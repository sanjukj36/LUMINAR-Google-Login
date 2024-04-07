// Loads .env files contents into contents into process.env by default
require("dotenv").config()

const express=require("express")
const core=require("cors")
const router=require("./Routers/router")
require("./DB/connection")



// Creates an Express application.express()
const gLSServer=express()


// Use cors in express server
gLSServer.use(core())
gLSServer.use(express.json())
gLSServer.use(router)

//set up port where we have to run server
const PORT=3000|| process.env.PORT


gLSServer.listen(PORT, () => {
    console.log(`Project Google Login SingUp server start at PORT ${PORT}`);
});

gLSServer.get("/",(req,res)=>{
    res.status(200).send(`<h1> Google Login SingUp started and waiting for client request </h1>`)
})

gLSServer.post("/",(req,res)=>{
    res.status(200).send(`post request`)
})