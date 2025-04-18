import React, { use, useState,useEffect } from "react";
import { FaSearch, FaEdit, FaTrash, FaEye, FaPlus } from "react-icons/fa";
import api from "../../services/api";

const QuoteManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [quotes, setQuotes] = useState([]);
    const $token = localStorage.getItem("token");
    // Sample quote data (static for now)
    // 
    useEffect(() => {
        console.log($token);
        const fetchQuotes = async () => {
            try {
                const response = await api.get("/quotes", {
                    headers: {
                        Authorization: `Bearer ${$token}`,
                    },
                });
                setQuotes(response.data.data);
                console.log(response.data.data);
                
            } catch (error) {
                console.error("Erreur lors de la récupération des citations:", error);
            }
        };
        fetchQuotes();
    }, []);

    // Filter quotes based on search term
    const filteredQuotes = quotes.filter(
        (quote) =>
            quote.content_text.toLowerCase().includes(searchTerm.toLowerCase()) ||
            quote.auteur.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleView = (id) => {
        // This would be replaced with actual view logic
        console.log(`Viewing quote with ID: ${id}`);
        alert(`Visualisation de la citation #${id}`);
    };

    const handleEdit = (id) => {
        // This would be replaced with actual edit logic
        console.log(`Editing quote with ID: ${id}`);
        alert(`Édition de la citation #${id}`);
    };

    const handleDelete = async (id) => {
        // This would be replaced with actual deletion logic
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cette citation ?"
            )
        ){
            try {
                await api.delete(`/categories/${id}`, {
                    headers: {
                        Authorization: `Bearer ${$token}`,
                    },
                });
                setQuotes(quotes.filter((quote) => quote.id !== id));
            } catch (err) {
                alert("Erreur lors de la suppression de la citation");
                console.error(err);
            }
        }
        
        {
            console.log(`Deleting quote with ID: ${id}`);
            alert(`Citation #${id} supprimée avec succès!`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Gestion des citations
                </h1>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
                    <FaPlus className="mr-2" />
                    Ajouter une citation
                </button>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher une citation, un auteur ou un utilisateur..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Quotes Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Citation
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                source
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Auteur
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Stats
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredQuotes.map((quote) => (
                            <tr key={quote.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900 italic">
                                        "{quote.content_text.substring(0, 70)}..."
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Auteur: {quote.auteur} | Créée le:{" "}
                                        {new Date(
                                            quote.created_at
                                        ).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                                        {quote.source}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {quote.auteur}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-3">
                                        <div className="text-sm text-gray-500 flex items-center">
                                            <FaEye className="text-blue-500 mr-1" />{" "}
                                            {quote.nombre_vues}
                                        </div>
                                        <div className="text-sm text-gray-500 flex items-center">
                                            ❤️ {quote.nombres_likes}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <button
                                        onClick={() => handleView(quote.id)}
                                        className="text-blue-600 hover:text-blue-900 mx-2"
                                    >
                                        <FaEye />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(quote.id)}
                                        className="text-indigo-600 hover:text-indigo-900 mx-2"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(quote.id)}
                                        className="text-red-600 hover:text-red-900 mx-2"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center bg-white px-4 py-3 border-t border-gray-200 sm:px-6 rounded-lg shadow">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Précédent
                    </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Suivant
                    </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Affichage de <span className="font-medium">1</span>{" "}
                            à{" "}
                            <span className="font-medium">
                                {filteredQuotes.length}
                            </span>{" "}
                            sur{" "}
                            <span className="font-medium">{quotes.length}</span>{" "}
                            citations
                        </p>
                    </div>
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                &laquo; Précédent
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                1
                            </button>
                            <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                Suivant &raquo;
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteManagement;
