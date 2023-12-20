// dao/schemas/cartSchema.js
const mongoose = require('../mongoose');

const cartSchema = new mongoose.Schema({
  products: [
    {
      id: Number,
      quantity: Number,
    },
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
