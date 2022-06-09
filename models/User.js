let mongoose=require('mongoose');
const Schema=mongoose.Schema;
// const addressSchema=require('./addressSchema')

const addressSchema=new Schema({
    city:String,
    street:String,
    houseNumber:Number
})
const userSchema=new mongoose.Schema({
    id:String,
    name:String,
    email:{
        type:String,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    password:{
        type:Number,
        minLength:5
    },
    address:[addressSchema],
 })
 userSchema.virtual('usersOrders',{
     ref:'Order',
    localField:'_id',
    foreignField:'user'
 })
 userSchema.set("toObject",{virtuals:true})
 userSchema.set("toJSON",{virtuals:true})

module.exports=mongoose.model('User',userSchema)