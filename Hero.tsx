import Link from 'next/link';

export default function Hero() {
  return (
    <section id="beranda" className="relative bg-gradient-to-br from-orange-50 to-red-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Katering Terbaik di 
              <span className="text-orange-600"> Jakarta</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sajikan hidangan istimewa untuk acara spesial Anda. 
              Dari pernikahan hingga meeting perusahaan, kami hadirkan 
              pengalaman kuliner yang tak terlupakan dengan cita rasa autentik Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#kontak" 
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300 text-center font-semibold"
              >
                Pesan Sekarang
              </Link>
              <Link 
                href="#menu" 
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition duration-300 text-center font-semibold"
              >
                Lihat Menu
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-gray-600">Acara Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">5000+</div>
                <div className="text-gray-600">Pelanggan Puas</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Katering mewah" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl shadow-lg z-20">
              <div className="text-2xl font-bold">Harga Terjangkau</div>
              <div className="text-orange-100">Kualitas Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}