import {orderRepository} from "../repositorys/order.repository.js"
 
const createOrder = async (data) => {
    // verificar se o  produo  existe
    // se  tiver acomponhamentos fazer a requsição
    // se não  tiver apenas criar o pedido
    return await orderRepository.createOrder(data)
}

export const orderSerivce ={
    createOrder
}