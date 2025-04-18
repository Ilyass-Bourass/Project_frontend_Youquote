import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import existing components
// ...

// Import admin layout and components
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";
import TagManagement from "./pages/admin/TagManagement";
import CategoryManagement from "./pages/admin/CategoryManagement";
import QuoteManagement from "./pages/admin/QuoteManagement";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Existing routes */}
                {/* ... */}

                {/* Admin routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="tags" element={<TagManagement />} />
                    <Route path="categories" element={<CategoryManagement />} />
                    <Route path="quotes" element={<QuoteManagement />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
