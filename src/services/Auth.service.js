import ApiClient from "../api/axiosConfig";

const login = (route, params) => {
    return ApiClient.post(route, params, { excludeToken: true })
}

export default { login };