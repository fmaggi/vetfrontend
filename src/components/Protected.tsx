import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/authentication";

export default function Protected({ children }: { children: JSX.Element }): JSX.Element {
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
}
