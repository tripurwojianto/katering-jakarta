export default function Services() {
  const services = [
    {
      title: 'Katering Pernikahan',
      description: 'Sajikan momen spesial Anda dengan hidangan mewah dan elegan untuk pernikahan impian.',
      icon: '💍',
      features: [
        'Menu prasmanan premium',
        'Dekorasi meja mewah',
        'Waiter profesional',
        'Paket foto & video'
      ]
    },
    {
      title: 'Katering Perusahaan',
      description: 'Layanan katering untuk meeting, seminar, gathering, dan acara perusahaan lainnya.',
      icon: '🏢',
      features: [
        'Paket lunch box',
        'Coffee break',
        'Gala dinner',
        'Menu diet khusus'
      ]
    },
    {
      title: 'Katering Rumahan',
      description: 'Hidangan lezat untuk acara keluarga seperti arisan, syukuran, dan ulang tahun.',
      icon: '🏠',
      features: [
        'Paket hemat',
        'Menu anak-anak',
        'Free ongkir Jabodetabek',
        'Peralatan makan lengkap'
      ]
    },
    {
      title: 'Katering Acara Besar',
      description: 'Siap melayani acara besar dengan kapasitas hingga 5000 orang.',
      icon: '🎉',
      features: [
        'Kapasitas besar',
        'Tenda & perlengkapan',
        'Generator set',
        'Tim koordinator event'
      ]
    }
  ];
  
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-orange-600">Katering</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan katering untuk memenuhi kebutuhan 
            acara Anda, mulai dari acara intim hingga event besar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="text-left space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 w-full">
                Detail Layanan
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Butuh Paket Katering Kustom?
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Kami siap membuat paket katering sesuai dengan kebutuhan dan budget Anda. 
            Konsultasikan acara Anda dengan tim profesional kami.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition duration-300 font-semibold">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}