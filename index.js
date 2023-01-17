const express = require('express')
const dotenv=require('dotenv')
dotenv.config()

const router1=require('./routers/router1')
const router2=require('./routers/router2')
const app=express()

app.use(express.json())

app.use('/router1',router1);
app.use('/router2',router2);

app.listen(7777,()=>{
    console.log("Connection Successfully Done...\nServer Running at localhost:7777")
})
