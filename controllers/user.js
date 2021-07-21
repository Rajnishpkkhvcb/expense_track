const User=require('../models/user')

const bcrypt=require('bcryptjs')

const jwt=require('jsonwebtoken')

function signup(req,res){
    const user={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    }

    models.User.create(user)
    .then(result=>{
        res.status(201).json({
            message:'Registration successfull'
        })
    })
    .catch(err=>{
        res.staus(500).json({
            message:'something went wrong'
        })
    })
}

module.exports=signup;