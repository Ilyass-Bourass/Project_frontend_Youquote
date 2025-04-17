import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/navBar";
import Logout from "./pages/logout";
import IndexUser from "./pages/user/index";
//import IndexAdmin from './pages/dashbordAdmin/index';
import Home from "./pages/HomePage";
import HomePage from "./pages/HomePage";

import NavBarUser from "./components/user/NavBarUser";
import MesQuotes from "./pages/user/MesQuotes";
import MesFavorites from "./pages/user/MesFavorites";
import CreateQuote from "./pages/user/CreateQuote";
import AjouteQuote from "./pages/user/AjouteQuote";
import MesStatistiques from "./pages/user/mesStatistiques";

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
                <Route path="/dashboardAdmin" element={<p>dashboardAdmin</p>} />

                <Route path="/dashboardUser" element={<IndexUser />}>
                    <Route path="quotes" element={<MesQuotes />} />
                    <Route path="favorites" element={<MesFavorites />} />
                    <Route path="create" element={<CreateQuote />} />
                    <Route path="ajouter" element={<AjouteQuote />} />
                    <Route path="statistiques" element={<MesStatistiques />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
