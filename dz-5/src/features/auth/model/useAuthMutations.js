import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../entities/user/model/authStore";
import { authApi } from "../../../entities/user/api/authApi";

export function useRegister() {
    const login = useAuthStore((s) => s.login)
    return useMutation ({
        mutationFn: authApi.register,
        onSuccess: (data) => login(data.token.accessToken, data.token.refreshToken, data.user)
    })
}


export function useLogin() {
    const login = useAuthStore((s) => s.login)
    return useMutation ({
        mutationFn: authApi.register,
        onSuccess: (data) => login(data.token.accessToken, data.token.refreshToken, data.user)
    })
}

export function useLogout() {
    const refreshToken = useAuthStore((s) => s.refreshToken)
    const logout = useAuthStore((s) => s.logout)
    return useMutation ({
        mutationFn: async () => {
            if (refreshToken) await authApi.login({refreshToken})
        },
        onSettled: () => logout
    })
}