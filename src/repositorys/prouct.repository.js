import {prisma} from '../../prisma/prisma.js';

const getProducts = async () => {
  return await prisma.product.findMany({});
};

const getProductById = async (productId) => {
  return await prisma.product.findFirst({
    where: {id: productId},
  });
};
export const productRepository = {
  getProducts,
  getProductById,
};
