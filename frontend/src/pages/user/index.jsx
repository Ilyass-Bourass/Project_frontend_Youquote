import React, { useEffect } from "react";
import NavBarUser from "../../components/user/NavBarUser";
import { Outlet, useNavigate } from "react-router-dom";

export default function IndexUser() {
    const navigate = useNavigate();

    useEffect(() => {
        // Vérifier si l'utilisateur est connecté
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
    }, [navigate]);

    return <NavBarUser />;
}
