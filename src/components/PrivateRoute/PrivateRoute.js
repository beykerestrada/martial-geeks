import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";

export const PrivateRoute = ({children}) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (user) {
            setLoading(false);
        }
    }, [user]);

    if (loading) {
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login"/>
    }

    return <>{children}</>
}