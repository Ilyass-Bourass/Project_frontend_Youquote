import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import Logout from "../../pages/logout";
import {
    FaUsers,
    FaTags,
    FaLayerGroup,
    FaQuoteRight,
    FaTachometerAlt,
    FaSignOutAlt,
} from "react-icons/fa";

const AdminNavbar = () => {
    const location = useLocation();

    // Navigation links configuration
    const navLinks = [
        { to: "/admin", label: "Tableau de bord", icon: <FaTachometerAlt /> },
        { to: "/admin/users", label: "Utilisateurs", icon: <FaUsers /> },
        { to: "/admin/tags", label: "Tags", icon: <FaTags /> },
        {
            to: "/admin/categories",
            label: "Catégories",
            icon: <FaLayerGroup />,
        },
        { to: "/admin/quotes", label: "Citations", icon: <FaQuoteRight /> },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 w-64 bg-purple-800 text-white shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-purple-700">
                <h1 className="text-2xl font-bold">
                    <span className="text-yellow-300">You</span>
                    <span className="text-white">Quote</span>
                    <span className="text-xs ml-2 font-light">ADMIN</span>
                </h1>
            </div>

            {/* Navigation */}
            <nav className="mt-5 flex-grow">
                <ul className="space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`flex items-center px-4 py-3 hover:bg-purple-700 transition-colors ${
                                    location.pathname === link.to
                                        ? "bg-purple-700 border-l-4 border-yellow-400"
                                        : ""
                                }`}
                                end="true"
                            >
                                <span className="mr-3 text-lg">
                                    {link.icon}
                                </span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Footer with logout */}
            <div className="mt-auto border-t border-purple-700 p-4">
                <NavLink
                    to="/"
                    className="text-sm text-purple-200 hover:text-white block mb-4"
                >
                    Accueil YouQuote
                </NavLink>
                <div className="w-full">
                    <Logout className="w-full" />
                </div>
            </div>
        </aside>
    );
};

export default AdminNavbar;
