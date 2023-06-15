import ApiClient from "../api/axiosConfig";
import beekeeper from "../api/routes/beekeeper.routes";

const getProducts = () => {
    return ApiClient.get(beekeeper.products)
}

const addProduct = (params) => {
    return ApiClient.post(beekeeper.addProduct, params)
}

const deleteProducts = (params) => {
    return ApiClient.post(beekeeper.deleteProducts, params)
}
const editProduct = (params) => {
    return ApiClient.post(beekeeper.editProduct, params)
}


export default { getProducts, addProduct, deleteProducts, editProduct };