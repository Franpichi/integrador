
const express = require('express');
const router = express.Router();
const ProductManager = require('../dao/models/ProductManager');

module.exports = () => {
  const productManager = new ProductManager();

  router.get('/', async (req, res) => {
    const { limit = 10, page = 1, sort, query } = req.query;
    try {
      const result = await productManager.getProducts({ limit, page, sort, query });
      res.json(result);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
      const product = await productManager.getProductById(productId);
      res.json(product);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newProduct = req.body;
      const addedProduct = await productManager.addProduct(newProduct);
      res.status(201).json(addedProduct);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  router.put('/:pid', async (req, res) => {
    const productId = req.params.pid;
    const updatedFields = req.body;
    try {
      const updatedProduct = await productManager.updateProduct(productId, updatedFields);
      res.json(updatedProduct);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  router.delete('/:pid', async (req, res) => {
    const productId = req.params.pid;
    try {
      await productManager.deleteProduct(productId);
      res.send('Product deleted successfully');
    } catch (error) {
      res.status(404).send(error.message);
    }
  });

  return router;
};
