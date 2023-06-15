import ApiClient from "../api/axiosConfig";
import client from "../api/routes/client.routes";

const getOffers = (params) => {
    return ApiClient.post(client.offers, params)
}




export default { getOffers};