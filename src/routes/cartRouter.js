/* // src/routes/cartRouter.js
const express = require('express');
const router = express.Router();
const CartManager = require('../dao/models/CartManager');

module.exports = () => {
  const cartManager = new CartManager();

  router.post('/', async (req, res) => {
    try {
      const newCart = await cartManager.createCart();
      res.status(201).json(newCart);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.get('/:cid', async (req, res) => {
    const cartId = req.params.cid;
    try {
      const cart = await cartManager.getCartById(cartId);
      res.json(cart);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.post('/:cid/product/:pid', async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity || 1;

    try {
      await cartManager.addProductToCart(cartId, productId, quantity);
      res.send('Product added to cart successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  return router;
};
 */

// src/routes/cartRouter.js
const express = require('express');
const router = express.Router();
const CartManager = require('../dao/models/CartManager');

module.exports = () => {
  const cartManager = new CartManager();

  // Resto de las rutas de cartRouter

  router.delete('/:cid/products/:pid', async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    try {
      await cartManager.removeProductFromCart(cartId, productId);
      res.send('Product removed from cart successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  router.put('/:cid', async (req, res) => {
    const cartId = req.params.cid;
    const products = req.body.products;
    try {
      await cartManager.updateCart(cartId, products);
      res.send('Cart updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  router.put('/:cid/products/:pid', async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    const quantity = req.body.quantity;
    try {
      await cartManager.updateProductQuantity(cartId, productId, quantity);
      res.send('Product quantity updated successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  router.delete('/:cid', async (req, res) => {
    const cartId = req.params.cid;
    try {
      await cartManager.removeAllProductsFromCart(cartId);
      res.send('All products removed from cart successfully');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  return router;
};
