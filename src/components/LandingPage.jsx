// src/components/LandingPage.jsx
import React from 'react';
import Header from './Header'; 
import Headers from './Headers';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Headers />
      <PopularRoutes />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

// HeroSection Component
function HeroSection() {
  return (
    <section className="text-center p-8 green-custom">
      <h1 className="text-3xl font-bold mb-4">Selamat datang di Perjalanan Menyenangkan bersama Chu Chu Rawr</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <FeatureCard 
            title="Tiket Kereta Api" 
            image="/images/kereta.png" 
          />
          <p className="mt-2">
            "Tiket kereta api ini memiliki beberapa pilihan layanan kereta api yang dapat mengantarkan anda." 
          </p>
        </div>
        
        <div className="text-center">
          <FeatureCard 
            title="Rute"  
            image="/images/rute.png" 
          />
          <p className="mt-2">
            "Kereta Api Chu Chu Rawr mengajak Anda menikmati pemandangan alam yang menakjubkan sepanjang perjalanan, dengan fasilitas modern yang menjamin kenyamanan Anda."
          </p>
        </div>
        
        <div className="text-center">
          <FeatureCard 
            title="Jadwal"  
            image="/images/jadwal.png" 
          />
          <p className="mt-2">
            "Kami menawarkan jadwal keberangkatan yang fleksibel dan menarik untuk memenuhi kebutuhan perjalanan Anda yang nyaman dan tepat waktu."
          </p>
        </div>
        
        <div className="text-center">
          <FeatureCard 
            title="Harga"  
            image="/images/harga.png" 
          />
          <p className="mt-2">
            "Kami menawarkan harga yang sangat terjangkau dari kelas ekonomi sampai eksklusif. Dapatkan diskon 10% untuk pemesanan yang dilakukan secara online."
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, image }) {
  return (
    <div className="p-4 bg-green-custom rounded-lg shadow-md flex flex-col items-center">
      <img src={image} alt={title} className="w-10 h-10 mb-2" />
      <h2 className="text-xl font-poppins font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// PopularRoutes Component
function PopularRoutes() {
  return (
    <section className="flex justify-center items-center p-8 bg-light-green">
      <div className="text-center justify-center w-1/4">
        <h2 className="text-2xl font-bold mb-6">Rute Kereta Api Paling Populer</h2>
        <ul className="list-decimal text-left mx-auto space-y-2">
          <li>Balikpapan to Samarinda</li>
          <li>Balikpapan to Tenggarong</li>
          <li>Samarinda to Tenggarong</li>
          <li>Balikpapan to Penajam</li>
          <li>Balikpapan to IKN</li>
          <li>Samarinda to IKN</li>
          <li>Balikpapan to Bontang</li>
          <li>Balikpapan to Handil</li>
        </ul>
      </div>
      <img
        src="images/kereta kencana.png"
        alt="Kereta"
        className="ml-8"
        width="400"
      />
    </section>
  );
}

function Features() {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8">Apa saja yang bisa didapatkan dari Kereta Api Chu Chu Rawr?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Kolom Kiri */}
        <div className="space-y-8 flex flex-col items-center text-center">
          <p className="font-poppins text-lg leading-relaxed max-w-[200px]">
            Nikmati kursi yang luas dan ergonomis untuk perjalanan yang menenangkan.
          </p>
          <div className="bg-green-200 p-6 rounded-lg">
            <img src="/images/kursi.png" alt="Kursi" className="w-16 h-16 mx-auto mb-4" />
          </div>

          <p className="font-poppins text-lg leading-relaxed max-w-[200px]">
            Tetap terhibur dengan pilihan film, musik, dan permainan kami.
          </p>
          <div className="bg-green-200 p-6 rounded-lg">
            <img src="/images/lagu.png" alt="Pilihan Hiburan" className="w-16 h-16 mx-auto mb-4" />
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="bg-green-200 p-6 rounded-lg">
            <img src="/images/sungai.png" alt="Jadwal Tepat Waktu" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <p className="font-poppins text-lg leading-relaxed max-w-[200px]">
            Nikmati kenyamanan perjalanan dengan jadwal kereta yang selalu tepat waktu dan mudah diingat.
          </p>

          <div className="bg-green-200 p-6 rounded-lg">
            <img src="/images/air terjun.png" alt="Perjalanan Menarik" className="w-16 h-16 mx-auto mb-4" />
          </div>
          <p className="font-poppins text-lg leading-relaxed max-w-[200px]">
            Kami akan menawarkan perjalanan yang menarik langsung dari kursi kereta Anda selama perjalanan.
          </p>
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  return (
    <section className="p-8 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Apa kata pengguna?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="testimonial-item">
          <img
            src="images/gambar cewe.png"
            alt="Imelda Kasih"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="font-semibold">Imelda Kasih</h3>
          <p className="text-sm text-gray-500">Pekerja</p>
        </div>

        <div className="testimonial-item">
          <img
            src="images/gambar laki.png"
            alt="Jeromie Poline"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="font-semibold">Jeromie Poline</h3>
          <p className="text-sm text-gray-500">Youtuber</p>
          <p className="font-poppins text-lg text-center max-w-xs mx-auto mt-4">
            "Selama perjalanan sangat seru dan menyenangkan apalagi selama perjalanan di berikan pelayanan yang sangat memuaskan sekali"
          </p>
        </div>

        <div className="testimonial-item">
          <img
            src="images/gambar cewe.png"
            alt="Ayu Purama"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="font-semibold">Ayu Purama</h3>
          <p className="text-sm text-gray-500">Mahasiswi</p>
        </div>
      </div>
    </section>
  );
}
export default App;
