import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Logout from "../../pages/logout";
import {
    FaChartBar,
    FaHeart,
    FaQuoteRight,
    FaPlus,
    FaHome,
} from "react-icons/fa";

export default function NavBarUser() {
    const [user, setUser] = useState({
        name: "Utilisateur",
        role: "Membre",
        avatar: "https://www.gravatar.com/avatar/?d=mp", // avatar inconnu style circle
    });

    useEffect(() => {
        // Récupérer les données utilisateur du localStorage
        const userData = localStorage.getItem("user");
        if (userData) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser({
                    ...user,
                    name: parsedUser.name || "Utilisateur",
                    email: parsedUser.email,
                    role: parsedUser.role || "Membre",
                });
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données utilisateur:",
                    error
                );
            }
        }
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-72 bg-gradient-to-b from-purple-700 to-purple-900 text-white shadow-xl flex flex-col justify-between p-6">
                {/* User Info */}
                <div>
                    <div className="flex flex-col items-center text-center mb-10">
                        <img
                            src={user.avatar}
                            alt="Avatar"
                            className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-3"
                        />
                        <h3 className="text-xl font-bold">{user.name}</h3>
                        <p className="text-sm text-purple-200">{user.role}</p>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-4">
                        <NavLink
                            to="/dashboardUser"
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                                    isActive
                                        ? "bg-white text-purple-800 font-semibold shadow-md"
                                        : "hover:bg-purple-600 hover:shadow-inner"
                                }`
                            }
                        >
                            <FaHome className="text-lg" />{" "}
                            <span className="text-md">Tableau de bord</span>
                        </NavLink>

                        <NavLink
                            to="/dashboardUser/statistiques"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                                    isActive
                                        ? "bg-white text-purple-800 font-semibold shadow-md"
                                        : "hover:bg-purple-600 hover:shadow-inner"
                                }`
                            }
                        >
                            <FaChartBar className="text-lg" />{" "}
                            <span className="text-md">Mes Statistiques</span>
                        </NavLink>

                        <NavLink
                            to="/dashboardUser/favorites"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                                    isActive
                                        ? "bg-white text-purple-800 font-semibold shadow-md"
                                        : "hover:bg-purple-600 hover:shadow-inner"
                                }`
                            }
                        >
                            <FaHeart className="text-lg" />{" "}
                            <span className="text-md">Mes Favoris</span>
                        </NavLink>

                        <NavLink
                            to="/dashboardUser/quotes"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                                    isActive
                                        ? "bg-white text-purple-800 font-semibold shadow-md"
                                        : "hover:bg-purple-600 hover:shadow-inner"
                                }`
                            }
                        >
                            <FaQuoteRight className="text-lg" />{" "}
                            <span className="text-md">Mes Citations</span>
                        </NavLink>

                        

                        <NavLink
                            to="/dashboardUser/ajouter"
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition duration-300 ${
                                    isActive
                                        ? "bg-white text-purple-800 font-semibold shadow-md"
                                        : "hover:bg-purple-600 hover:shadow-inner"
                                }`
                            }
                        >
                            <FaPlus className="text-lg" />{" "}
                            <span className="text-md">Ajouter une citation</span>
                        </NavLink>
                    </nav>
                </div>

                {/* Logout et liens rapides */}
                <div className="mt-8 border-t border-purple-600 pt-6 space-y-4">
                    <NavLink
                        to="/"
                        className="text-sm text-purple-200 hover:text-white block mb-2"
                    >
                        Accueil YouQuote
                    </NavLink>
                    <Logout />
                </div>
            </aside>

            {/* Contenu principal */}
            <main className="flex-1 p-8 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
