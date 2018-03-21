var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  
   description: {
    type: String,
    default: '',
    trim: true,
    required: 'Description required'
  },
  
   price: {
    type: Number,
    trim: true,
    required: 'Price required'
  },
  
   quantitiy: {
    type: Number,
    min: '1',
    trim: true,
    required: 'Quantity required'
  },

  content: {
    type: String,
    default: '',
    trim: true,
    required: 'Content required'

  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
    
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
