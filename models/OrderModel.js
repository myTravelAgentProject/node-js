var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const productsForOrderSchema=new Schema({
	'product' : {
		type: Schema.Types.ObjectId,
		ref: 'Product'
   },
   'quantity':Number
})
var orderSchema = new Schema({
	'sum' : Number,
	'date' : Date,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'items' : [productsForOrderSchema]
});

module.exports = mongoose.model('Order', orderSchema);