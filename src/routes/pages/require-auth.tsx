import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { MainLayout } from "../layouts/main-layout";

export const RequireAuth = () => {

    const auth  = localStorage.getItem("user");
    const location = useLocation();

    return(
        auth ? (

            <Outlet /> 
        ) : (
            <Navigate to="/sign-in" state={{from: location}} replace />
        )
    )
}