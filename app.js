const express=require('express')
const bodyParser=require('body-parser')
const userRoute=require('./routes/user')

const app=express()

app.use('/',userRoute)
app.listen(6000)

module.exports=app;