'use client';

import { useState } from 'react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'appetizer', name: 'Appetizer' },
    { id: 'main', name: 'Main Course' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'beverage', name: 'Minuman' },
  ];
  
  const menuItems = [
    {
      id: 1,
      name: 'Nasi Tumpeng Mini',
      category: 'main',
      description: 'Nasi kuning dengan lauk pauk lengkap dalam porsi mini',
      price: 'Rp 25.000',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Sate Ayam Madura',
      category: 'main',
      description: 'Sate ayam dengan bumbu kacang khas Madura',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Gado-gado Jakarta',
      category: 'appetizer',
      description: 'Sayuran segar dengan bumbu kacang dan kerupuk',
      price: 'Rp 20.000',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Rendang Daging',
      category: 'main',
      description: 'Daging sapi empuk dengan bumbu rendang khas Padang',
      price: 'Rp 45.000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Es Pisang Ijo',
      category: 'dessert',
      description: 'Pisang hijau dengan es dan sirup khas Makassar',
      price: 'Rp 15.000',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Es Teh Manis',
      category: 'beverage',
      description: 'Teh manis dingin yang menyegarkan',
      price: 'Rp 8.000',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1c5e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Menu <span className="text-orange-600">Unggulan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pilihan menu terbaik kami dengan cita rasa autentik Indonesia 
            yang akan memanjakan lidah tamu undangan Anda.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-orange-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300">
                  Tambah ke Pesanan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300 font-semibold">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </section>
  );
}