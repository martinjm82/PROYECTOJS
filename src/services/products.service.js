import * as productsModel from '../models/products.model.js';

export const getProducts = async () => productsModel.getAllProducts();

export const getProduct = async (id) => productsModel.getProductById(id);

export const addProduct = async (product) => {
  if (!product || !product.name || product.price === undefined) {
    const error = new Error('Datos de producto inválidos');
    error.status = 400;
    throw error;
  }

  return productsModel.createProduct(product);
};

export const updateProduct = async (id, product) => {
  if (!product || Object.keys(product).length === 0) {
    const error = new Error('Datos de producto inválidos');
    error.status = 400;
    throw error;
  }

  const updatedProduct = await productsModel.updateProduct(id, product);

  if (!updatedProduct) {
    const error = new Error('Producto no encontrado');
    error.status = 404;
    throw error;
  }

  return updatedProduct;
};

export const removeProduct = async (id) => {
  const deleted = await productsModel.deleteProduct(id);

  if (!deleted) {
    const error = new Error('Producto no encontrado');
    error.status = 404;
    throw error;
  }
};
