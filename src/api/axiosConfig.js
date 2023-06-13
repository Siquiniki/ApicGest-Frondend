import axios from 'axios';

const ApiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

ApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        if (config.excludeToken) {
            delete config.headers.Authorization;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default ApiClient;