import ApiClient from "../api/axiosConfig";
import authRoutes from "../api/routes/auth.routes";

const login = (route, params) => {
    return ApiClient.post(route, params, { excludeToken: true })
}

const isUserAuth = () => {
    return ApiClient.post(authRoutes.authUser)
}

export default { login,isUserAuth};