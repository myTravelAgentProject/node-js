const {ObjectId}=require('mongodb');
const db=require('../db/db');
// const mongoosedb=require('./mongoosedb');

module.exports.geyAllUsers=async function(req,res){
    const users=await db.getDB().collection('user').find().toArray();
    res.send(users);
}
module.exports.getUserById=async function(req,res){
    const user=await db.getDB().collection('user').findOne(ObjectId(req.params.id));
    res.send(user);
}
module.exports.updateUser=async function(req,res){
    const {name,password,email}=req.body;
    const user={$set:{
        name:name,
        age:age,
        address:address
    }}
    const id=req.params.id;
    await userModel.updateOne({ _id: ObjectId(id) });
    res.send(`user update run successfully`);
        // await db.getDB().collection('user').updateOne(ObjectId(req.params.id),user);
    
}
// module.exports.addNewUser=async function(req,res){
//     const {name,password,email}=req.body;
//     const user={
//         name:name,
//         password:password,
//         email:email
//     }
//     const id=await (await db.getDB().collection('user').insertOne(user)).insertedId;

//     res.send(`user ${id} add successfully`);
// }
module.exports.deleteUser=async function(req,res){
    await db.getDB().collection('user').deleteOne(req.body);
    res.send('delete run successfully');
}




// module.exports.geyAllCategories=async function(req,res){
//     const categories=await CategoryModel.find();
//     res.send(categories);
// };
