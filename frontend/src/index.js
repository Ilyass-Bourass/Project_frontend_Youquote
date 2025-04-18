import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Logout from "./pages/logout";
import IndexUser from "./pages/user/index";
import HomePage from "./pages/HomePage";

import MesQuotes from "./pages/user/MesQuotes";
import MesFavorites from "./pages/user/MesFavorites";
import CreateQuote from "./pages/user/CreateQuote";
import AjouteQuote from "./pages/user/AjouteQuote";
import MesStatistiques from "./pages/user/mesStatistiques";
import EditQuote from "./pages/user/EditQuote";

// Import admin components
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import TagManagement from "./pages/admin/TagManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import QuoteManagement from "./pages/admin/QuoteManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/mesStatistiques" element={<MesStatistiques />} />

                {/* Admin Dashboard Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="tags" element={<TagManagement />} />
                    <Route path="categories" element={<CategoryManagement />} />
                    <Route path="quotes" element={<QuoteManagement />} />
                </Route>
                 {/* User Dashboard Routes */}
                <Route path="/dashboardUser" element={<IndexUser />}>
                    <Route path="quotes" element={<MesQuotes />} />
                    <Route path="favorites" element={<MesFavorites />} />
                    <Route path="create" element={<CreateQuote />} />
                    <Route path="ajouter" element={<AjouteQuote />} />
                    <Route path="statistiques" element={<MesStatistiques />} />
                    <Route path="edit/:id" element={<EditQuote />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
