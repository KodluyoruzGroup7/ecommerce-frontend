import { products as DATA } from './data';

export const getAllProducts = () => DATA;

export const getProduct = (id) => {
  try {
    const product = DATA.filter((p) => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  } catch (err) {
    console.log(err);
  }
};

export const getProductsByCategory = (category) => {
  try {
    const products = DATA.filter((p) => p.collections.includes(category));
    if (products.length < 1) {
      throw new Error('Category not found');
    }
    return products;
  } catch (err) {
    console.log(err);
  }
};
