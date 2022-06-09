const {ObjectId}=require('mongodb');
const mongoose=require('mongoose');
// const User = require('../models/User');
const userModel=require('../models/User');

module.exports.geyAllUsers=async function(req,res,next){
    try{
    const user=await userModel.find();
    res.send(user);
}
catch(error){
    next(error)
}
}
module.exports.getUserById=async function(req,res,next){
    try{
    const user=await userModel.findById(ObjectId(req.params.id));
    res.send(user);}
    catch(error){
        next(error)
    }
}
module.exports.Login=async function(req,res,next){
    try{
        const email=req.params.email ;
        const password= req.params.password;
    let user=await userModel.findOne({ email:email,password:password }).exec();
    res.send(user);}
    catch(error){
        next(error)
    }
}
module.exports.updateUser=async function(req,res,next){
    try{
        const {name,password,email,address}=req.body;
        const user= {$set:{
            name,
            password,
            email,
            address
        }}
        const idToUp=req.params.id;
        const updateUser=await userModel.updateOne({_id:idToUp},user);
        res.send(` update user ${name}`)
    }
    catch(error){
        next(error)
    }
}
module.exports.addNewUser=async function(req,res,next){
    try{
        const {name,password,email,address}=req.body;
        const user= new userModel({
            name,
            password,
            email,
            address
        })
        const insertedUser=await user.save();
        res.send(insertedUser);
    }
    catch(error){
        next(error)
    }

}
module.exports.deleteUser=async function(req,res){
    try{
        const idToDelete=req.params.id;
        await userModel.deleteOne({_id:ObjectId(idToDelete)});
        res.send(` delete user  ${idToDelete} `)
    }
    catch(error){
        next(error)
    }
}

module.exports.getUserOrders=async function(req,res,next){
    try{
        const data=await userModel.findById(ObjectId(req.params.id))
            .populate('usersOrders');
        res.send(data)
    }
    catch(error){
        next(error)
    }
}