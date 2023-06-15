import ApiClient from "../api/axiosConfig";
import admin from "../api/routes/admin.routes";

const getRequests = () => {
    return ApiClient.get(admin.requests)
}

const getUsers = () => {
    return ApiClient.get(admin.users)
}


export default { getRequests, getUsers};