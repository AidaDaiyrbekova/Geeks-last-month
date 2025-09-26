

import axios from "axios"
import { env } from "../config/env"
import { useAuthStore } from "../../entities/user/model/authStore"

export const api = axios.create({
    baseURL: env.API_URL, withCredentials: true
})

api.interceptors.request.use((config) => {
    const {accessToken} = useAuthStore.getState()
    if(accessToken) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${accessToken}`
    }
        
    return config
})

let isRefreshing = false
let refreshPromise = null
let pendingQueue = []

function enqueue (token) {
    pendingQueue.push(token)
}

function drainQueue (token) {
    pendingQueue.forEach((cb) => cb (token))
    pendingQueue = []
}

async function doRefresh() {
      const { refreshToken, setTokens, logout} = useAuthStore.getState();
      if (!refreshToken) {
        logout();
        throw new Error ("No refresh token")
      }

      const {data} = await axios.post(`${env.API_URL}api/auth/refresh`, {refreshToken})
      setTokens(data.accessToken, data.refreshToken)


}

api.interceptors.response.use (
    (r) => r,
    async (error) => {
        const original = error.config
        const status = error.response?.status;

        if(status === 401 && !original.retry){
            original._retry = true;

            if (!isRefreshing){
                isRefreshing=true
                refreshPromise =doRefresh()
                .then(() => {
                    const { accessToken } = useAuthStore.getState()
                        drainQueue(accessToken)
                })
                .catch ((e) => {
                    drainQueue(null)
                    throw e
                })
                .finally (() => {
                    isRefreshing =false
                    refreshPromise = null
                })
            }

            return new Promise ((resolve, reject) => {
                enqueue ((token) => {
                    if (!token) {
                        reject(error)
                        return
                    }
                    original.headers = original.headers ?? {};
                    (original.headers).Authorization = `Bearer ${token}`;
                    resolve(api(original))
                })
            })
        }
    }
)