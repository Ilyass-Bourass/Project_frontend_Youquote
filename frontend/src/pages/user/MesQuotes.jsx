import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import api from "../../services/api";

const MesQuotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                // Simuler l'appel API (remplacez par un vrai appel API)
                // const response = await api.get('/user/quotes');
                // setQuotes(response.data);

                // Données simulées
                setQuotes([
                    {
                        id: 1,
                        content_text:
                            "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
                        auteur: "Gandhi",
                        source: "Livre de sagesse",
                        nombre_mots: 14,
                        nombre_vues: 124,
                        nombres_likes: 42,
                        created_at: "2023-06-15",
                    },
                    {
                        id: 2,
                        content_text:
                            "Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte.",
                        auteur: "Winston Churchill",
                        source: "Discours",
                        nombre_mots: 17,
                        nombre_vues: 98,
                        nombres_likes: 35,
                        created_at: "2023-07-21",
                    },
                    {
                        id: 3,
                        content_text:
                            "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
                        auteur: "Confucius",
                        source: "Manuscrits",
                        nombre_mots: 15,
                        nombre_vues: 76,
                        nombres_likes: 27,
                        created_at: "2023-08-04",
                    },
                ]);

                setLoading(false);
            } catch (err) {
                setError("Erreur lors du chargement des citations");
                setLoading(false);
                console.error(err);
            }
        };

        fetchQuotes();
    }, []);

    const handleDelete = async (id) => {
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cette citation ?"
            )
        ) {
            try {
                // Simuler l'appel API (remplacez par un vrai appel API)
                // await api.delete(`/quotes/${id}`);

                // Mise à jour de l'interface utilisateur
                setQuotes(quotes.filter((quote) => quote.id !== id));
            } catch (err) {
                alert("Erreur lors de la suppression de la citation");
                console.error(err);
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Chargement de vos citations...
            </div>
        );
    }

    if (error) {
        return <div className="text-center py-10 text-red-600">{error}</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-purple-700">
                    📝 Mes citations
                </h2>
                
            </div>

            {quotes.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-600">
                        Vous n'avez pas encore créé de citations.
                    </p>
                    <Link
                        to="/dashboardUser/create"
                        className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                    >
                        Créer ma première citation
                    </Link>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Citation
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Auteur
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stats
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {quotes.map((quote) => (
                                <tr key={quote.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 italic">
                                            "
                                            {quote.content_text.substring(
                                                0,
                                                60
                                            )}
                                            ..."
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Source: {quote.source}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Créée le:{" "}
                                            {new Date(
                                                quote.created_at
                                            ).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {quote.auteur}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex space-x-4">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FaHeart className="text-pink-500 mr-1" />{" "}
                                                {quote.nombres_likes}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-500">
                                                <FaEye className="text-blue-500 mr-1" />{" "}
                                                {quote.nombre_vues}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-3">
                                            <button className="text-indigo-600 hover:text-indigo-900">
                                                <FaEdit />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(quote.id)
                                                }
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MesQuotes;
