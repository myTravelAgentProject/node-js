var CategoryModel = require('../models/CategoryModel.js');

/**
 * CategoryController.js
 *
 * @description :: Server-side logic for managing Categorys.
*/
module.exports.geyAllCategories=async function(req,res){
    const categories=await CategoryModel.find();
    res.send(categories);
};


    /**
     * CategoryController.create()
     */
     module.exports.addNewCategory=async function(req,res,next){
        try{
            const {name}=req.body;
            const category= new CategoryModel({
                name
            })
            const insertedCategory=await category.save();
            res.send(insertedCategory);
        }
        catch(error){
            next(error)
        }
    
    }

