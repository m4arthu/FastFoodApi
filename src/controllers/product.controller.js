import { orderSerivce } from "../services/order.service.js"
import { productService } from "../services/product.service.js"

const  getProducts = async(req,res) => {
    const  products = await productService.getProducts()
    return res.send(products)
}

export const ProductController = {
    getProducts,
}