const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantity: Number,
  price: Number,
  supplier: String,
  inStock: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
