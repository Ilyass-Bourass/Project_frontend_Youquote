import React, { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import AddCategoryModal from "../../components/admin/AddCategoryModal";

const CategoryManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample category data (static for now)
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Philosophie",
            description: "Citations philosophiques",
            count: 38,
            created_at: "2023-01-05",
        },
        {
            id: 2,
            name: "Littérature",
            description: "Extraits littéraires",
            count: 45,
            created_at: "2023-01-15",
        },
        {
            id: 3,
            name: "Science",
            description: "Citations scientifiques",
            count: 22,
            created_at: "2023-02-10",
        },
        {
            id: 4,
            name: "Spiritualité",
            description: "Pensées spirituelles",
            count: 31,
            created_at: "2023-02-20",
        },
        {
            id: 5,
            name: "Art",
            description: "Citations d'artistes",
            count: 26,
            created_at: "2023-03-10",
        },
        {
            id: 6,
            name: "Politique",
            description: "Citations politiques",
            count: 18,
            created_at: "2023-03-25",
        },
    ]);

    // Filter categories based on search term
    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (category.description &&
                category.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()))
    );

    const handleEdit = (id) => {
        // This would be replaced with actual edit logic
        console.log(`Editing category with ID: ${id}`);
        alert(`Édition de la catégorie #${id}`);
    };

    const handleDelete = (id) => {
        // This would be replaced with actual deletion logic
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cette catégorie ?"
            )
        ) {
            console.log(`Deleting category with ID: ${id}`);
            setCategories(categories.filter((category) => category.id !== id));
            alert(`Catégorie #${id} supprimée avec succès!`);
        }
    };

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
        alert(`Catégorie "${newCategory.name}" ajoutée avec succès!`);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Gestion des catégories
                </h1>
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center"
                    onClick={() => setIsModalOpen(true)}
                >
                    <FaPlus className="mr-2" />
                    Ajouter une catégorie
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
                        placeholder="Rechercher une catégorie..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Categories Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Catégorie
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Description
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
                        {filteredCategories.map((category) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        {category.name}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">
                                        {category.description || "-"}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {category.count}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {new Date(
                                            category.created_at
                                        ).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(category.id)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(category.id)
                                        }
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

            {/* Add Category Modal */}
            <AddCategoryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddCategory}
            />
        </div>
    );
};

export default CategoryManagement;
