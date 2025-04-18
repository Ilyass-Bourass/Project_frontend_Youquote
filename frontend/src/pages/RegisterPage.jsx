import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [password_confirmation, setPassword_confirmation] = useState('');

  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/register', {
        name,
        email,
        password,
        password_confirmation,
      });
      console.log('✅ Inscrit:', res.data);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      if(res.data.user.role === 'admin') {
        console.log('admin');
        navigate('/admin');
      }else{
        navigate('/dashboardUser');
      }
    } catch (error) {
      alert(`Erreur de connexion: ${error.response.data.message}`);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <form
        onSubmit={handelRegister}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-purple-200"
      >
        <h1 className="text-3xl font-bold text-center text-purple-700">Créer un compte</h1>

        <input
          type="text"
          value={name}
          placeholder="Votre nom complet"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />
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
        <input
          type="password"
          value={password_confirmation}
          placeholder="Confirmer le mot de passe"
          onChange={(e) => setPassword_confirmation(e.target.value)}
          className="w-full p-3 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
