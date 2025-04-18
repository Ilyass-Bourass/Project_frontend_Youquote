import React, { use, useState,useEffect } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import api from "../../services/api"; 



const TagManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const fetchTags = async () => {
            try {       
                const response = await api.get("/tags");
                setTags(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des tags:", error);
            }
        };
        fetchTags();
    }, []);

  

    // Filter tags based on search term
    const filteredTags = tags.filter((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (id) => {
        // This would be replaced with actual edit logic
        console.log(`Editing tag with ID: ${id}`);
        alert(`Édition du tag #${id}`);
    };

    const handleDelete = (id) => {
        // This would be replaced with actual deletion logic
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce tag ?")) {
            console.log(`Deleting tag with ID: ${id}`);
            alert(`Tag #${id} supprimé avec succès!`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Gestion des tags
                </h1>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
                    <FaPlus className="mr-2" />
                    Ajouter un tag
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
                        placeholder="Rechercher un tag..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Tags Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Tag
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Citations
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Date de création
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredTags.map((tag) => (
                            <tr key={tag.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        {tag.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        nombre de citaions (en cours de développement)
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {new Date(
                                            tag.created_at
                                        ).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(tag.id)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(tag.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TagManagement;
