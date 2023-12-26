/* // dao/models/ProductManager.js
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
 */

// dao/models/ProductManager.js
const Product = require('../schemas/productSchema');

class ProductManager {
  async getProducts({ limit = 10, page = 1, sort, query } = {}) {
    try {
      const skip = (page - 1) * limit;
      const filter = query ? { $or: [{ title: new RegExp(query, 'i') }, { description: new RegExp(query, 'i') }] } : {};

      const products = await Product.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort ? { price: sort === 'asc' ? 1 : -1 } : {});

      const totalProducts = await Product.countDocuments(filter);
      const totalPages = Math.ceil(totalProducts / limit);

      return {
        status: 'success',
        payload: products,
        totalPages,
        prevPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        page,
        hasPrevPage: page > 1,
        hasNextPage: page < totalPages,
        prevLink: page > 1 ? `/api/products?limit=${limit}&page=${page - 1}&sort=${sort}&query=${query}` : null,
        nextLink: page < totalPages ? `/api/products?limit=${limit}&page=${page + 1}&sort=${sort}&query=${query}` : null,
      };
    } catch (error) {
      throw new Error('Error getting products');
    }
  }
}

module.exports = ProductManager;
