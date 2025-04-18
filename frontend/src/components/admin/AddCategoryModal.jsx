import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import api from "../../services/api";

const AddCategoryModal = ({ isOpen, onClose, onAdd }) => {
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const $token = localStorage.getItem("token");

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!categoryName.trim()) {
            setError("Le nom de la catégorie est requis");
            return;
        }

        setIsLoading(true);
        try {
            // API call to save category to database using the api service
            const response = await api.post(
                "/categories",
                {
                    name: categoryName,
                },
                {
                    headers: {
                        Authorization: `Bearer ${$token}`,
                    },
                }
            );

            if (response.data.status === "success") {
                // Call the onAdd function with the returned category data
                onAdd(response.data.data);

                // Reset form and close modal
                setCategoryName("");
                setError("");
                onClose();
            } else {
                setError(
                    response.data.message ||
                        "Une erreur est survenue lors de l'ajout de la catégorie"
                );
            }
        } catch (error) {
            // Check specifically for duplicate category error
            if (
                error.response?.data?.message?.includes("already exists") ||
                error.response?.status === 409 ||
                error.response?.data?.error === "DUPLICATE_CATEGORY"
            ) {
                setError(
                    "Cette catégorie existe déjà. Veuillez choisir un autre nom."
                );
            } else {
                setError(
                    "Erreur de connexion au serveur: " +
                        (error.response?.data?.message || error.message)
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Ajouter une catégorie
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FaTimes />
                    </button>
                </div>

                {error && (
                    <div
                        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                        role="alert"
                    >
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="categoryName"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Nom de la catégorie *
                        </label>
                        <input
                            type="text"
                            id="categoryName"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Entrez le nom de la catégorie"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                            disabled={isLoading}
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 flex items-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Traitement...
                                </>
                            ) : (
                                "Ajouter"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategoryModal;
