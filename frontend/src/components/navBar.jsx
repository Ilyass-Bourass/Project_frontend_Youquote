import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuoteLeft, FaQuoteRight, FaHeart, FaBookmark } from "react-icons/fa";


export default function NavBar() {
  
  return (
    <>
        <nav className="bg-white shadow-md rounded-b-3xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex items-center">
                      <Link to="/" className="flex-shrink-0 flex items-center text-purple-600">
                        <FaQuoteLeft className="h-6 w-6" />
                        <span className="font-bold text-xl ml-2">YouQuote</span>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link 
                        to="/login" 
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                      <Link 
                        to="/register" 
                        className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
    </>
  )
}
