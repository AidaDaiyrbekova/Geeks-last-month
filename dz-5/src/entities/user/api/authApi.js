import { api } from "../../../shared/api/axiosInstance"

export const authApi = {
    async register (body) {
        const {data} = await api.post('api/auth/register', body);
        return data;
    },
    async login (body) {
        const {data} = await api.post('api/auth/login', body);
        return data;
    },
    async refresh (body) {
        const {data} = await api.post('api/auth/refresh', body);
        return data;
    },
    async logout (body) {
     await api.post('api/auth/logout', body);
    }
    
}