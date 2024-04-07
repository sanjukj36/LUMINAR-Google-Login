const mongoose = require('mongoose')

//connect mongoose
mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongodb atlas connected with pfServer");
    }
).catch(
    err=>{
        console.log("connection failed!!!");
        console.log(err);
    }
)