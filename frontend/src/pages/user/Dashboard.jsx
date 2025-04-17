import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaHeart, FaQuoteRight, FaPlus } from "react-icons/fa";
import api from "../../services/api";

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalQuotes: 0,
        totalLikes: 0,
        totalViews: 0,
        recentQuotes: [],
    });

    const [user, setUser] = useState({
        name: "",
    });

    useEffect(() => {
        // Récupérer les données utilisateur
        const userData = localStorage.getItem("user");
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données utilisateur:",
                    error
                );
            }
        }

        // Simuler le chargement des statistiques (à remplacer par des appels API réels)
        setStats({
            totalQuotes: 24,
            totalLikes: 156,
            totalViews: 1250,
            recentQuotes: [
                {
                    id: 1,
                    content_text:
                        "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
                    auteur: "Gandhi",
                    likes: 42,
                },
                {
                    id: 2,
                    content_text:
                        "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
                    auteur: "Winston Churchill",
                    likes: 35,
                },
                {
                    id: 3,
                    content_text:
                        "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
                    auteur: "Confucius",
                    likes: 27,
                },
            ],
        });
    }, []);

    const cardStyle = "bg-white rounded-lg shadow-md p-6 border-l-4";

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Bienvenue, {user.name}
                </h1>
                <Link
                    to="/dashboardUser/create"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-sm hover:shadow-md"
                >
                    <FaPlus /> Nouvelle citation
                </Link>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`${cardStyle} border-purple-500`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-500 font-medium">Citations</h3>
                        <FaQuoteRight className="text-purple-500" />
                    </div>
                    <p className="text-3xl font-bold">{stats.totalQuotes}</p>
                </div>

                <div className={`${cardStyle} border-pink-500`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-500 font-medium">
                            J'aime reçus
                        </h3>
                        <FaHeart className="text-pink-500" />
                    </div>
                    <p className="text-3xl font-bold">{stats.totalLikes}</p>
                </div>

                <div className={`${cardStyle} border-blue-500`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-gray-500 font-medium">
                            Vues totales
                        </h3>
                        <FaChartBar className="text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold">{stats.totalViews}</p>
                </div>
            </div>

            {/* Citations récentes */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Vos citations récentes
                    </h2>
                    <Link
                        to="/dashboardUser/quotes"
                        className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                        Voir toutes →
                    </Link>
                </div>

                {stats.recentQuotes.map((quote) => (
                    <div
                        key={quote.id}
                        className="border-b border-gray-100 py-4 last:border-0"
                    >
                        <div className="flex justify-between">
                            <div>
                                <p className="text-gray-700 italic">
                                    "{quote.content_text}"
                                </p>
                                <p className="text-sm text-gray-500 mt-1">
                                    — {quote.auteur}
                                </p>
                            </div>
                            <div className="flex items-center space-x-1 text-pink-500">
                                <FaHeart size={14} />
                                <span className="text-sm font-medium">
                                    {quote.likes}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Accès rapides */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                    to="/dashboardUser/statistiques"
                    className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-5 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
                >
                    <FaChartBar size={24} />
                    <span className="font-semibold">Voir mes statistiques</span>
                </Link>

                <Link
                    to="/dashboardUser/favorites"
                    className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-5 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
                >
                    <FaHeart size={24} />
                    <span className="font-semibold">
                        Mes citations favorites
                    </span>
                </Link>

                <Link
                    to="/dashboardUser/quotes"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-5 text-white flex items-center gap-3 shadow-md hover:shadow-lg transition-all"
                >
                    <FaQuoteRight size={24} />
                    <span className="font-semibold">Gérer mes citations</span>
                </Link>
            </div>
        </div>
    );
}
