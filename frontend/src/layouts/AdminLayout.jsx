import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Fixed Sidebar */}
            <AdminNavbar />

            {/* Main Content */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto p-6 ml-64">
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
