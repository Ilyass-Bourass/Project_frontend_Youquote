import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

export default function EditQuote() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        content_text: "",
        source: "",
        auteur: "",
        tags: [],
        categories: [],
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [allTags, setAllTags] = useState([]);
    const [allCategories, setAllCategories] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const $token = localStorage.getItem("token");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log("Formulaire mis à jour:", { ...formData, [name]: value });
    };

    // Fetch quote data and options (tags, categories)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoadingData(true);
            try {
                // Fetch the specific quote to edit
                const quoteResponse = await api.get(`/quotes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${$token}`,
                    },
                });

                console.log("Quote data:", quoteResponse.data);
                const quoteData = quoteResponse.data;

                // Prepare the form data from the quote
                setFormData({
                    content_text: quoteData.content_text || "",
                    source: quoteData.source || "",
                    auteur: quoteData.auteur || "",
                    tags: quoteData.tags?.map((tag) => tag.id) || [],
                    categories:
                        quoteData.categories?.map((cat) => cat.id) || [],
                });

                // Fetch tags
                const tagsResponse = await api.get("/tags");
                if (tagsResponse.data) {
                    if (Array.isArray(tagsResponse.data)) {
                        setAllTags(tagsResponse.data);
                    } else if (
                        tagsResponse.data.data &&
                        Array.isArray(tagsResponse.data.data)
                    ) {
                        setAllTags(tagsResponse.data.data);
                    } else if (
                        tagsResponse.data.tags &&
                        Array.isArray(tagsResponse.data.tags)
                    ) {
                        setAllTags(tagsResponse.data.tags);
                    }
                }

                // Fetch categories
                const categoriesResponse = await api.get("/categories");
                if (categoriesResponse.data) {
                    if (Array.isArray(categoriesResponse.data)) {
                        setAllCategories(categoriesResponse.data);
                    } else if (
                        categoriesResponse.data.data &&
                        Array.isArray(categoriesResponse.data.data)
                    ) {
                        setAllCategories(categoriesResponse.data.data);
                    } else if (
                        categoriesResponse.data.categories &&
                        Array.isArray(categoriesResponse.data.categories)
                    ) {
                        setAllCategories(categoriesResponse.data.categories);
                    }
                }

                setError("");
            } catch (error) {
                console.error("Erreur lors du chargement des données:", error);
                setError("Erreur lors du chargement de la citation");

                if (error.response?.status === 401) {
                    setError("Session expirée. Veuillez vous reconnecter.");
                    setTimeout(() => navigate("/login"), 2000);
                }
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchData();
    }, [id, $token, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.tags.length === 0) {
            setError("Veuillez sélectionner au moins un tag");
            return;
        }

        if (formData.categories.length === 0) {
            setError("Veuillez sélectionner une catégorie");
            return;
        }

        console.log("Données du formulaire à envoyer:", formData);

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await api.put(`/quotes/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${$token}`,
                },
            });
            console.log("Réponse de l'API:", response.data);

            setSuccess("Citation mise à jour avec succès!");

            setTimeout(() => {
                navigate("/dashboardUser/quotes");
            }, 2000);
        } catch (err) {
            console.error("Erreur lors de la mise à jour:", err);
            console.error("Détails de l'erreur:", err.response?.data);

            if (err.response?.status === 401) {
                setError("Session expirée. Veuillez vous reconnecter.");
                setTimeout(() => navigate("/login"), 2000);
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError(
                    "Erreur lors de la mise à jour de la citation. Veuillez réessayer."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-6">
                Modifier la citation
            </h1>

            {isLoadingData && (
                <div
                    className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-6"
                    role="alert"
                >
                    <span className="block sm:inline">
                        Chargement de la citation...
                    </span>
                </div>
            )}

            {error && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                    role="alert"
                >
                    <strong className="font-bold">Erreur! </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

            {success && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
                    role="alert"
                >
                    <strong className="font-bold">Succès! </strong>
                    <span className="block sm:inline">{success}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="content_text"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Texte de la citation *
                    </label>
                    <textarea
                        id="content_text"
                        name="content_text"
                        value={formData.content_text}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Entrez le texte de votre citation..."
                        required
                    ></textarea>
                </div>

                <div>
                    <label
                        htmlFor="auteur"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Auteur *
                    </label>
                    <input
                        type="text"
                        id="auteur"
                        name="auteur"
                        value={formData.auteur}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Nom de l'auteur"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="source"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Source *
                    </label>
                    <input
                        type="text"
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Livre, film, discours, etc."
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">
                        Tags * (Sélectionnez au moins un tag)
                    </label>
                    <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg p-3">
                        {allTags.length > 0 ? (
                            allTags.map((tag) => (
                                <div key={tag.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`tag-${tag.id}`}
                                        name="tags"
                                        value={tag.id}
                                        onChange={(e) => {
                                            const { value, checked } = e.target;
                                            const tagId = parseInt(value);

                                            if (checked) {
                                                setFormData({
                                                    ...formData,
                                                    tags: [
                                                        ...formData.tags,
                                                        tagId,
                                                    ],
                                                });
                                            } else {
                                                setFormData({
                                                    ...formData,
                                                    tags: formData.tags.filter(
                                                        (id) => id !== tagId
                                                    ),
                                                });
                                            }
                                        }}
                                        checked={formData.tags.includes(tag.id)}
                                        className="mr-2 h-5 w-5 text-purple-600"
                                    />
                                    <label
                                        htmlFor={`tag-${tag.id}`}
                                        className="text-gray-700"
                                    >
                                        {tag.name}
                                    </label>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">
                                Aucun tag disponible ou en cours de
                                chargement...
                            </p>
                        )}
                    </div>
                    {formData.tags.length === 0 && (
                        <p className="text-red-500 text-sm mt-1">
                            Veuillez sélectionner au moins un tag
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="categories"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Catégorie *
                    </label>
                    <select
                        id="categories"
                        name="categories"
                        onChange={(e) => {
                            const categoryId = parseInt(e.target.value);
                            setFormData({
                                ...formData,
                                categories: [categoryId],
                            });
                        }}
                        value={formData.categories[0] || ""}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    >
                        <option value="" disabled>
                            Sélectionnez une catégorie
                        </option>
                        {allCategories.length > 0 ? (
                            allCategories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>
                                Aucune catégorie disponible ou en cours de
                                chargement...
                            </option>
                        )}
                    </select>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => navigate("/dashboardUser/quotes")}
                        className="px-6 py-2 mr-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 disabled:opacity-50"
                        disabled={
                            loading ||
                            isLoadingData ||
                            allTags.length === 0 ||
                            allCategories.length === 0
                        }
                    >
                        {loading ? "En cours..." : "Mettre à jour la citation"}
                    </button>
                </div>
            </form>
        </div>
    );
}
