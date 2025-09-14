import type { ReactNode } from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = !!localStorage.getItem('token')
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
}

export default PrivateRoute