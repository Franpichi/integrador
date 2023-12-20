// dao/models/CartManager.js
const Cart = require('../schemas/cartSchema');

class CartManager {
  async createCart() {
    try {
      const newCart = new Cart({
        products: [],
      });

      await newCart.save();
      return newCart;
    } catch (error) {
      throw new Error('Error creating cart');
    }
  }

  async getCartById(cartId) {
    try {
      const cart = await Cart.findById(cartId);
      if (!cart) {
        throw new Error('Cart not found');
      }
      return cart;
    } catch (error) {
      throw new Error('Error getting cart');
    }
  }

  async generateCartId() {
    const cartCount = await Cart.countDocuments();
    return (cartCount + 1).toString();
  }

  async addProductToCart(cartId, productId, quantity) {
    try {
      const cart = await this.getCartById(cartId);

      const existingProduct = cart.products.find((p) => p.id === productId);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.products.push({
          id: productId,
          quantity: quantity,
        });
      }

      await cart.save();
    } catch (error) {
      throw new Error('Error adding product to cart');
    }
  }
}

module.exports = CartManager;
