import React, { useState, useEffect } from "react";
import { FaHeart, FaEye, FaTrash, FaExternalLinkAlt } from "react-icons/fa";
import api from "../../services/api";

export default function MesFavorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                // Simuler l'appel API (remplacez par un vrai appel à votre API)
                // const response = await api.get('/user/favorites');
                // setFavorites(response.data);

                // Données simulées
                setFavorites([
                    {
                        id: 4,
                        content_text:
                            "La beauté commence au moment où vous décidez d'être vous-même.",
                        auteur: "Coco Chanel",
                        source: "Interview Magazine",
                        nombre_vues: 157,
                        nombres_likes: 89,
                        created_at: "2023-05-12",
                    },
                    {
                        id: 5,
                        content_text:
                            "Le plus grand risque est de ne prendre aucun risque. Dans un monde qui change si vite, la seule stratégie garantissant l'échec est de ne pas prendre de risques.",
                        auteur: "Mark Zuckerberg",
                        source: "Discours Facebook",
                        nombre_vues: 203,
                        nombres_likes: 76,
                        created_at: "2023-04-18",
                    },
                    {
                        id: 6,
                        content_text:
                            "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.",
                        auteur: "Nelson Mandela",
                        source: "Discours à l'université",
                        nombre_vues: 312,
                        nombres_likes: 145,
                        created_at: "2023-03-22",
                    },
                ]);

                setLoading(false);
            } catch (err) {
                setError("Erreur lors du chargement des citations favorites");
                setLoading(false);
                console.error(err);
            }
        };

        fetchFavorites();
    }, []);

    const handleRemoveFromFavorites = async (id) => {
        try {
            // Simuler l'appel API (remplacez par un vrai appel API)
            // await api.delete(`/favorites/${id}`);

            // Mise à jour de l'interface utilisateur
            setFavorites(favorites.filter((quote) => quote.id !== id));
        } catch (err) {
            alert("Erreur lors de la suppression des favoris");
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Chargement de vos citations favorites...
            </div>
        );
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-purple-700">
                ❤️ Mes Citations Favorites
            </h2>

            {favorites.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-600">
                        Vous n'avez pas encore ajouté de citations à vos
                        favoris.
                    </p>
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                    >
                        Explorer des citations
                    </button>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {favorites.map((quote) => (
                        <div
                            key={quote.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="p-5">
                                <div className="mb-3 text-gray-700 italic">
                                    "{quote.content_text}"
                                </div>
                                <div className="text-sm font-medium text-purple-700">
                                    - {quote.auteur}
                                </div>
                                <div className="text-xs text-gray-500 mb-4">
                                    Source: {quote.source}
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-sm text-pink-500">
                                            <FaHeart className="mr-1" />{" "}
                                            {quote.nombres_likes}
                                        </div>
                                        <div className="flex items-center text-sm text-blue-500">
                                            <FaEye className="mr-1" />{" "}
                                            {quote.nombre_vues}
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            className="text-gray-500 hover:text-blue-600 text-sm flex items-center"
                                            title="Voir en détail"
                                        >
                                            <FaExternalLinkAlt />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleRemoveFromFavorites(
                                                    quote.id
                                                )
                                            }
                                            className="text-gray-500 hover:text-red-600 text-sm flex items-center"
                                            title="Retirer des favoris"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
