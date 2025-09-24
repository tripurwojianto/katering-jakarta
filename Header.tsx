'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-600">
              KateringJakarta
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#beranda" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Beranda
            </Link>
            <Link href="#tentang" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Tentang Kami
            </Link>
            <Link href="#menu" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Menu
            </Link>
            <Link href="#layanan" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Layanan
            </Link>
            <Link href="#testimoni" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Testimoni
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-orange-600 transition duration-300">
              Kontak
            </Link>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#kontak" 
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300"
            >
              Pesan Sekarang
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#beranda" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Beranda
              </Link>
              <Link href="#tentang" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Tentang Kami
              </Link>
              <Link href="#menu" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Menu
              </Link>
              <Link href="#layanan" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Layanan
              </Link>
              <Link href="#testimoni" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Testimoni
              </Link>
              <Link href="#kontak" className="text-gray-700 hover:text-orange-600 transition duration-300">
                Kontak
              </Link>
              <Link 
                href="#kontak" 
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 text-center"
              >
                Pesan Sekarang
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}