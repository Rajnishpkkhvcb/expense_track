const express=require('express')
const bodyParser=require('body-parser')
const userRoute=require('./routes/user')

const app=express()

app.use('/',userRoute)

module.exports=app;