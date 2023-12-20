// dao/schemas/productSchema.js
const mongoose = require('../mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  code: String,
  stock: Number,
  status: Boolean,
});

module.exports = mongoose.model('Product', productSchema);
