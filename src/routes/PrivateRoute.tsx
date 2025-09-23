import { Navigate } from "react-router";

const PrivateRoute = () => {
    const isAuthenticated = !!localStorage.getItem('currentUser')
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
}

export default PrivateRoute