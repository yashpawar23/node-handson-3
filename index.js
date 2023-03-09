// const express =require ('express')
// const cors = require('cors')

const express = require("express")
const cors = require("cors")
const app= express()

app.use(cors());

const middleware = (req,res,next) =>{
    console.log("i am i middleware")
    console.log("i got the login req")
    next();
}

const middleware2 = (req,res,next) => {
    console.log(req+"i am in midleware 2")
    next();
}

app.get("/",(req,res)=>{
    res.send("i am in homepage")
    res.end()
})
app.get("/first",(req,res)=>{
    res.send("middleware 1")
    res.end()
})
app.get("/second",(req,res)=>{
    res.send("middleware 2")
    res.end()
})

app.listen(8080,()=>{
    console.log("something running")
})