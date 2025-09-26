import { create } from "zustand";
import { createJSONStorage, devtools,persist } from "zustand/middleware";


export const useAuthStore = create() (
     devtools(
        persist(
            (set, get) => ({
                accessToken: null,
                refreshToken: null,
                user: null,
                login: (access, refresh, user)=> set({accessToken: access, refreshToken: refresh, user}, false, 'auth/login' ),
                setTokens: (access, refresh) =>  set({accessToken: access, refreshToken: refresh}, false, 'auth/setTokens' ),
                setUser: (user) => set({user}, false, 'auth/setUser'),
                logout: () => set({accessToken: null, refreshToken: null, user:null}, false, 'auth/logout'),
                isAuthed: () => Boolean (get().accessToken)
            }),
            { name: 'auth-v1', storage: createJSONStorage(() => localStorage)}
        )
        
     )
    )