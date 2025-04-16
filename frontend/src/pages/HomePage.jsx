import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight, FaHeart, FaBookmark } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { BsFillLightningFill } from "react-icons/bs";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-white flex flex-col">

      {/* Navbar */}
      
      < NavBar />
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-5xl font-bold text-purple-700 leading-tight">
          Partagez des citations<br /> qui inspirent le monde
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Explorez, aimez et créez des citations inspirantes avec YouQuote. Une plateforme simple et intuitive.
        </p>
        <Link
          to="/register"
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-lg hover:opacity-90 transition"
        >
          Commencer maintenant
        </Link>
      </main>

      {/* Section Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 md:px-12 rounded-3xl shadow-xl max-w-7xl mx-auto mb-24">
  <h2 className="text-3xl font-bold text-purple-800 text-center mb-16 tracking-wide">🌟 Pourquoi choisir <span className="text-purple-600">YouQuote</span> ?</h2>

  <div className="grid md:grid-cols-3 gap-10">
    {/* Bloc 1 */}
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-600 transition-colors duration-300">
        <FaHeart className="text-3xl text-purple-600 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-purple-700 mb-3">Trouvez l'inspiration</h3>
      <p className="text-gray-600 leading-relaxed">Explorez un océan de citations puissantes, motivantes, et toujours à point nommé.</p>
    </div>

    {/* Bloc 2 */}
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-600 transition-colors duration-300">
        <FaBookmark className="text-3xl text-purple-600 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-purple-700 mb-3">Organisez votre monde</h3>
      <p className="text-gray-600 leading-relaxed">Créez une collection personnalisée de vos citations favorites à revisiter à tout moment.</p>
    </div>

    {/* Bloc 3 */}
    <div className="group bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-600 transition-colors duration-300">
        <IoMdTrendingUp className="text-3xl text-purple-600 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-purple-700 mb-3">Partagez votre voix</h3>
      <p className="text-gray-600 leading-relaxed">Exprimez-vous. Publiez vos propres citations et inspirez des milliers de lecteurs.</p>
    </div>
  </div>
</section>


      {/* Section Citations Populaires */}
      <section className="bg-gradient-to-br from-white via-purple-50 to-white py-16 px-6 md:px-12 rounded-3xl shadow-xl max-w-7xl mx-auto mb-20">
  <div className="flex justify-between items-center mb-10">
    <h2 className="text-3xl font-extrabold text-purple-700">✨ Citations Populaires</h2>
    <Link to="/popular" className="text-purple-600 hover:underline font-medium text-sm md:text-base transition">
      Voir tout &rarr;
    </Link>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[{
      text: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
      author: "Gandhi",
      likes: 243
    }, {
      text: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.",
      author: "Confucius",
      likes: 198
    }, {
      text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
      author: "Winston Churchill",
      likes: 176
    }].map((quote, index) => (
      <div key={index} className="relative bg-white border border-purple-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 group">
        <FaQuoteLeft className="absolute top-4 left-4 text-purple-200 text-3xl group-hover:text-purple-400 transition" />
        <p className="text-gray-700 italic mb-4 mt-6 leading-relaxed">"{quote.text}"</p>
        <div className="text-right font-semibold text-purple-600">– {quote.author}</div>
        <div className="flex items-center mt-3 text-purple-400 text-sm">
          <FaHeart className="mr-2" /> {quote.likes}
        </div>
      </div>
    ))}
  </div>
      </section>


      {/* Section Catégories */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">🗂️ Explorez par catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🚀</span>
            </div>
            <span className="font-medium text-gray-700">Motivation</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">❤️</span>
            </div>
            <span className="font-medium text-gray-700">Amour</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🏆</span>
            </div>
            <span className="font-medium text-gray-700">Succès</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">😊</span>
            </div>
            <span className="font-medium text-gray-700">Bonheur</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">🧠</span>
            </div>
            <span className="font-medium text-gray-700">Sagesse</span>
          </div>
          
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-purple-100 hover:shadow-md transition cursor-pointer">
            <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-xl">✈️</span>
            </div>
            <span className="font-medium text-gray-700">Voyage</span>
          </div>
        </div>
      </section>

      {/* Section Citation du jour */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4 rounded-3xl shadow-lg max-w-6xl mx-auto mb-16">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-6">✨ Citation du jour</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-3xl text-pink-300 opacity-60" />
            </div>
            <p className="text-2xl italic font-light mb-4">
              "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il découle de vos propres actions."
            </p>
            <div className="flex justify-center">
              <FaQuoteRight className="text-3xl text-pink-300 opacity-60" />
            </div>
            <p className="mt-4 font-medium text-lg">– Dalai Lama</p>
          </div>
        </div>
      </section>

      {/* Section Citation Aléatoire */}
      <section className="text-center mb-20">
        <h2 className="text-xl font-bold text-purple-700 mb-4">🎲 Une citation au hasard ?</h2>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg transition flex items-center mx-auto">
          <BsFillLightningFill className="mr-2" /> Générer une citation
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;