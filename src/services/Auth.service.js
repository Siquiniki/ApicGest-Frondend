import ApiClient from "../api/axiosConfig";
import authRoutes from "../api/routes/auth.routes";

const login = () => {
    return ApiClient.post(
        authRoutes.login,
        {
            user: 'arifuret',
            // user: 'arifuretA',
            password: '@M4y4D3v',
            // password: '@M4y4D3v3',
        },
        { excludeToken: true }
    )
}

export { login };