import React, { useEffect, useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import api from "../../services/api";

const UserManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const $token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await api.get("/users", {
                    headers: {
                        Authorization: `Bearer ${$token}`,
                    },
                });
                console.log("Users response:", response.data);
                setUsers(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching users:", err);
                setError("Erreur lors du chargement des utilisateurs");
                // Set some default users for development if API fails
                setUsers([
                    {
                        id: 1,
                        name: "Jean Dupont",
                        email: "jean.dupont@example.com",
                        role: "Utilisateur",
                        status: "Actif",
                        created_at: "2023-01-15",
                    },
                    {
                        id: 2,
                        name: "Marie Martin",
                        email: "marie.martin@example.com",
                        role: "Admin",
                        status: "Actif",
                        created_at: "2023-02-20",
                    },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter users based on search term
    const filteredUsers = users.filter(
        (user) =>
            user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEdit = (id) => {
        // This would be replaced with actual navigation/edit logic
        console.log(`Editing user with ID: ${id}`);
        alert(`Édition de l'utilisateur #${id}`);
    };

    const handleDelete = (id) => {
        // This would be replaced with actual deletion logic
        if (
            window.confirm(
                "Êtes-vous sûr de vouloir supprimer cet utilisateur ?"
            )
        ) {
            console.log(`Deleting user with ID: ${id}`);
            alert(`Utilisateur #${id} supprimé avec succès!`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Gestion des utilisateurs
                </h1>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher un utilisateur..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Utilisateur
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Rôle
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Statut
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Date d'inscription
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
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {user.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                        user.role === "Admin"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "Modérateur"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                    }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                        user.status === "Actif"
                            ? "bg-red-100 text-green-800"
                            : "bg-green-100 text-red-800"
                    }`}
                                    >
                                        {user.statut}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(
                                        user.created_at
                                    ).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
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

            {/* Pagination */}
            <div className="flex justify-between items-center bg-white px-4 py-3 border-t border-gray-200 sm:px-6 rounded-lg shadow">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Affichage de <span className="font-medium">1</span>{" "}
                            à{" "}
                            <span className="font-medium">
                                {filteredUsers.length}
                            </span>{" "}
                            sur{" "}
                            <span className="font-medium">{users.length}</span>{" "}
                            utilisateurs
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

export default UserManagement;
