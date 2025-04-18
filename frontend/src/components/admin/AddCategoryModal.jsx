import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddCategoryModal = ({ isOpen, onClose, onAdd }) => {
    const [categoryName, setCategoryName] = useState("");
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!categoryName.trim()) {
            setError("Le nom de la catégorie est requis");
            return;
        }

        
        onAdd({
            name: categoryName,
            id: Date.now(), 
            created_at: new Date().toISOString(),
        });

        // Reset form and close modal
        setCategoryName("");
        setError("");
        onClose();
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
                        />
                    </div>

                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategoryModal;
