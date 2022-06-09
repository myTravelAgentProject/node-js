var OrderModel = require('../models/OrderModel.js');

/**
 * orderController.js
 *
 * @description :: Server-side logic for managing orders.
 */
 module.exports.getAllOrders=async function(req,res,next){
     try{
          orders=await OrderModel.find();
        res.send(orders);
     }
     catch(error){
         next(error)
     }
    
};
 module.exports.addNewOrder=async function(req,res,next){
    try{
        const {sum,date,user,items}=req.body;
        const order= new OrderModel({
            sum,
            date,
            user,
            items
        })
        const insertedOrder=await order.save();
        res.send(insertedOrder);
    }
    catch(error){
        next(error)
    }

}