import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Intercepteur pour ajouter automatiquement le token à chaque requête
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            // Gérer les tokens avec ou sans guillemets (JSON.stringify)
            const parsedToken = token.startsWith('"')
                ? JSON.parse(token)
                : token;
            config.headers["Authorization"] = `Bearer ${parsedToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
