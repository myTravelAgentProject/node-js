const { ObjectId } = require('mongoose/lib/schema/index');
var ProductModel = require('../models/ProductModel');

/**
 * ProductController.js
 *
 * @description :: Server-side logic for managing Products.
 */
 module.exports.getProducts=async function(req,res,next){
     try{
         let products
         if(req.query.categoryId!=null){
             const cId=req.query.categoryId
            products=await ProductModel.find({category:cId})
         }else{
            products=await ProductModel.find();  
         }
        res.send(products);
     }catch(error){
         next(error);
     }
};


     module.exports.addNewProduct=async function(req,res,next){
        try{
            const {name,description,price,category,img}=req.body;
            const product= new ProductModel({
                name,             
                description,
                price,
                category,
                img
            })
            const insertedProduct=await product.save();
            res.send(insertedProduct);
        }
        catch(error){
            next(error)
        }
    
    }
