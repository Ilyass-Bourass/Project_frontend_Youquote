import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { FaQuoteLeft, FaQuoteRight, FaHeart, FaBookmark } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BsFillLightningFill } from "react-icons/bs";

export default function footer() {
  return (
    <>
       <footer className="bg-purple-700 text-white pt-12 pb-6 px-6 md:px-12 rounded-t-3xl shadow-lg mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
    
    {/* À propos */}
    <div>
      <h3 className="text-xl font-semibold mb-4">YouQuote</h3>
      <p className="text-sm text-purple-100 leading-relaxed">
        Plateforme pour partager, découvrir et s’inspirer à travers des citations puissantes et motivantes.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h4 className="text-lg font-medium mb-3">Navigation</h4>
      <ul className="space-y-2 text-purple-100 text-sm">
        <li><Link to="/" className="hover:underline">Accueil</Link></li>
        <li><Link to="/popular" className="hover:underline">Citations populaires</Link></li>
        <li><Link to="/login" className="hover:underline">Connexion</Link></li>
        <li><Link to="/register" className="hover:underline">Inscription</Link></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-lg font-medium mb-3">Contact</h4>
      <ul className="space-y-2 text-purple-100 text-sm">
        <li>Email : contact@youquote.com</li>
        <li>Téléphone : +212 6 00 00 00 00</li>
        <li>Adresse : Casablanca, Maroc</li>
      </ul>
    </div>

    {/* Suivez-nous */}
    <div>
      <h4 className="text-lg font-medium mb-3">Suivez-nous</h4>
      <div className="flex space-x-4 text-purple-100 text-xl">
        <a href="#"><FaFacebookF className="hover:text-white" /></a>
        <a href="#"><FaTwitter className="hover:text-white" /></a>
        <a href="#"><FaInstagram className="hover:text-white" /></a>
        <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
      </div>
    </div>

  </div>

  <div className="border-t border-purple-500 pt-4 text-center text-sm text-purple-200">
    &copy; {new Date().getFullYear()} YouQuote. Tous droits réservés.
  </div>
</footer>


    </>
  )
}
