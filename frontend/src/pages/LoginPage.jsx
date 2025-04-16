import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/login', { email, password });
      console.log('Connecté:', res.data);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      if(res.data.user.role === 'admin') {
        console.log('admin');
        navigate('/dashboarAdmin');
      }else{
        navigate('/dashboardUser');
      }
      

    } catch (error) {
      alert("Erreur de connexion", error.response.data.message);
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-purple-200"
      >
        <h1 className="text-3xl font-bold text-center text-purple-700">Connexion</h1>
        
        <input
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
        
        <input
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          Se connecter
        </button>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          Vous n'avez pas de compte? 
          <Link to="/register" className="text-purple-600 hover:text-purple-800 ml-1">
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
}