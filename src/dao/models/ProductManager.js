// dao/models/ProductManager.js
const Product = require('../schemas/productSchema');

class ProductManager {
  async addProduct(product) {
    try {
      const newProduct = new Product({
        ...product,
        status: true,
      });

      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw new Error('Error adding product');
    }
  }

  async getProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error('Error getting products');
    }
  }

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error getting product');
    }
  }

  async updateProduct(id, fields) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product not found');
      }

      Object.assign(product, fields);

      await product.save();
      return product;
    } catch (error) {
      throw new Error('Error updating product');
    }
  }

  async deleteProduct(id) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new Error('Product not found');
      }

      await product.remove();
      return true;
    } catch (error) {
      throw new Error('Error deleting product');
    }
  }
}

module.exports = ProductManager;
