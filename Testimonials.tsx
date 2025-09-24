export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Manager PT. Maju Bersama',
      content: 'KateringJakarta sangat membantu acara gathering perusahaan kami. Makanannya enak, pelayanan profesional, dan tepat waktu. Highly recommended!',
      rating: 5,
      date: '15 Maret 2024'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Mempelai Wanita',
      content: 'Terima kasih KateringJakarta untuk pernikahan impian kami. Tamu-tamu kami sangat puas dengan hidangan yang disajikan. Semua berjalan sempurna!',
      rating: 5,
      date: '28 Februari 2024'
    },
    {
      name: 'Ahmad Wijaya',
      role: 'Ketua RT 05',
      content: 'Pakai KateringJakarta untuk acara 17 Agustus. Harganya terjangkau tapi kualitasnya juara. Warga komplek semua puas!',
      rating: 5,
      date: '20 Agustus 2024'
    },
    {
      name: 'Maya Putri',
      role: 'Ibu Rumah Tangga',
      content: 'Acara ulang tahun anak jadi berkesan dengan kue dan menu anak-anak dari KateringJakarta. Anak-anak suka semua!',
      rating: 4,
      date: '10 Januari 2024'
    },
    {
      name: 'Hendra Kusuma',
      role: 'Event Organizer',
      content: 'Sudah beberapa kali kerjasama dengan KateringJakarta untuk klien-klien saya. Selalu memuaskan dan never disappoint!',
      rating: 5,
      date: '5 April 2024'
    },
    {
      name: 'Dewi Lestari',
      role: 'HRD Bank Syariah',
      content: 'Lunch box untuk karyawan bank kami selalu enak dan higienis. Tim KateringJakarta sangat kooperatif dan profesional.',
      rating: 5,
      date: '12 Juni 2024'
    }
  ];
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-orange-600">Pelanggan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Lihat testimoni 
            dari pelanggan yang telah menggunakan layanan katering kami.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              
              <div className="text-sm text-gray-500">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-orange-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bergabunglah dengan Ribuan Pelanggan Puas
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Jadikan acara Anda berkesan dengan layanan katering terbaik dari kami. 
              Hubungi kami sekarang juga untuk konsultasi gratis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition duration-300 font-semibold">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transition duration-300 font-semibold">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}