import {productRepository} from '../repositorys/prouct.repository.js';

const getProducts = async () => {
  return await productRepository.getProducts();
};

export const productService = {
  getProducts,
};
