import React from "react";
import { FaUsers, FaTags, FaLayerGroup, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
    // Sample statistics data (static for now)
    const stats = [
        {
            label: "Utilisateurs",
            value: 547,
            icon: <FaUsers className="text-blue-500" />,
            to: "/admin/users",
        },
        {
            label: "Citations",
            value: 1483,
            icon: <FaQuoteRight className="text-green-500" />,
            to: "/admin/quotes",
        },
        {
            label: "Tags",
            value: 28,
            icon: <FaTags className="text-yellow-500" />,
            to: "/admin/tags",
        },
        {
            label: "Catégories",
            value: 12,
            icon: <FaLayerGroup className="text-purple-500" />,
            to: "/admin/categories",
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Tableau de bord administrateur
            </h1>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <Link
                        to={stat.to}
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-500 text-sm">
                                    {stat.label}
                                </p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">
                                    {stat.value}
                                </p>
                            </div>
                            <div className="text-3xl">{stat.icon}</div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Activités récentes
                </h2>
                <div className="border-t border-gray-200">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div
                            key={item}
                            className="py-4 border-b border-gray-200"
                        >
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-gray-800">
                                        {item % 3 === 0
                                            ? "Nouvel utilisateur inscrit"
                                            : item % 2 === 0
                                            ? "Nouvelle citation ajoutée"
                                            : "Tag modifié"}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {item % 3 === 0
                                            ? "Jean Dupont"
                                            : item % 2 === 0
                                            ? '"La vie est belle" - Victor Hugo'
                                            : "Inspiration → Motivation"}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-400">
                                    il y a {item * 10} minutes
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
