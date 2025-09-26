import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../entities/user/model/authStore";

export function RequireAuth({children}) {
    const isAuthed = useAuthStore((s) => Boolean(s.accessToken))
    const location = useLocation()
     if (!isAuthed) return <Navigate to="/login" state={{from: location}} replace />
     return children
}