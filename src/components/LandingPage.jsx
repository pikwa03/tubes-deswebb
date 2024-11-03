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
  <section className="text-center p-8">
    <div className="flex items-start justify-center h-[100px]">
      <h1
        className="font-poppins text-[24px] font-bold text-center"
        style={{ maxWidth: '480px', lineHeight: '1.2', letterSpacing: '-0.5px' }}
      >
        Selamat datang di Perjalanan Menyenangkan bersama Chu Chu Rawr
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="text-[32px] font-medium text-center">
        <FeatureCard 
          title="Tiket Kereta Api" 
          image="/images/kereta.png" 
          imageSize={{ width: 222, height: 198 }}
        />
        <p className="font-poppins text-[15px] font-medium mt-4">
          "Tiket kereta api ini memiliki beberapa pilihan layanan kereta api yang dapat mengantarkan anda." 
        </p>
      </div>

      <div className="text-[32px] font-medium text-center">
        <FeatureCard 
          title="Rute"  
          image="/images/rute.png" 
          imageSize={{ width: 222, height: 198 }}
        />
        <p className="font-poppins text-[15px] font-medium mt-4">
          "Kereta Api Chu Chu Rawr mengajak Anda menikmati pemandangan alam yang menakjubkan sepanjang perjalanan, dengan fasilitas modern yang menjamin kenyamanan Anda."
        </p>
      </div>

      <div className="text-[32px] font-medium text-center">
        <FeatureCard 
          title="Jadwal"  
          image="/images/jadwal.png" 
          imageSize={{ width: 252, height: 298 }}
        />
        <p className="font-poppins text-[15px] font-medium mt-4">
          "Kami menawarkan jadwal keberangkatan yang fleksibel dan menarik untuk memenuhi kebutuhan perjalanan Anda yang nyaman dan tepat waktu."
        </p>
      </div>

      <div className="text-[32px] font-medium text-center">
        <FeatureCard 
          title="Harga"  
          image="/images/harga.png" 
          imageSize={{ width: 222, height: 198 }}
        />
        <p className="font-poppins text-[15px] font-medium mt-4">
          "Kami menawarkan harga yang sangat terjangkau dari kelas ekonomi sampai eksklusif. Dapatkan diskon 10% untuk pemesanan yang dilakukan secara online."
        </p>
      </div>
    </div>
  </section>
  );
}

const FeatureCard = ({ title, image, imageSize }) => (
  <div className="bg-green-custom p-4 rounded-lg flex flex-col items-center overflow-hidden">
    <img 
        src={image} 
        alt={title} 
        className="rounded-[25px] w-[222px] h-[198px]"
    />
    <h3 className="font-semibold mt-2">{title}</h3>
  </div>
);


// PopularRoutes Component
function PopularRoutes() {
  return (
    <section className="flex flex-col items-center p-8 bg-light-green">
      <h2 className="text-[30px] font-bold font-poppins mb-8 text-center">Rute Kereta Api Paling Populer</h2>
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl">
        <div className="flex justify-end items-start md:w-1/3 ml-auto">
          <ul className="list-decimal text-left space-y-0">
            <li className="font-medium font-poppins text-[24px] mt-8">Semarang to Jakarta</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Jakarta to Surabaya</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Jakarta to Semarang</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Jakarta to Purwokerto</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Bandung to Malang</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Jakarta to Bandung</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Jakarta to Yogyakarta</li>
            <li className="font-medium font-poppins text-[24px] mt-8">Semarang to Bandung</li>
          </ul>
        </div>
        {/* Memindahkan gambar ke dalam kontainer yang sama dengan daftar */}
        <div className="flex justify-end items-center md:w-1/2 ml-auto">
          <img
            src="images/kereta kencana.png"
            alt="Kereta"
            className="ml-4"
            width="934" 
            height="802" 
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="p-8 bg-gray-100 text-center">
      <div className="flex items-start justify-center h-[150px]">
        <h2
          className="font-poppins text-[20px] font-bold text-center"
          style={{ maxWidth: '390px', lineHeight: '1.2', letterSpacing: '-0.5px' }}
        >
          Apa saja yang bisa didapatkan dari Kereta Api Chu Chu Rawr?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Kolom Kiri */}
        <div className="space-y-8 flex flex-col items-center text-center">
          <p className="font-poppins font-medium text-[15px] leading-relaxed max-w-[200px]">
            Nikmati kursi yang luas dan ergonomis untuk perjalanan yang menenangkan.
          </p>
          <div
            className="bg-green-200 p-6 rounded-lg relative flex items-center justify-center"
            style={{ width: '250px', height: '190px' }} // Ukuran kontainer
          >
            <img
              src="/images/kursi.png"
              alt="Kursi"
              style={{
                width: '400px', // Ukuran gambar yang lebih besar
                height: '920px', // Ukuran gambar yang lebih besar
                position: 'absolute', // Pastikan posisi absolute
                bottom: '-430px', // Agar gambar keluar dari latar
                left: '-10px',  // Mengatur posisi horizontal
                objectFit: 'contain', // Menjaga proporsi gambar
              }}
            />
          </div>

          <p className="font-poppins font-medium text-[15px] leading-relaxed max-w-[200px]">
            Tetap terhibur dengan pilihan film, musik, dan permainan kami.
          </p>
          <div
            className="bg-green-200 p-6 rounded-lg relative flex items-center justify-center overflow-visible"
            style={{ width: '250px', height: '190px' }}
          >
            <img
              src="/images/lagu.png"
              alt="Pilihan Hiburan"
              style={{
                width: '400px', // Ukuran gambar besar
                height: 'auto', // Mempertahankan proporsi
                position: 'absolute',
                bottom: '-90px', // Agar gambar keluar dari latar
                left: '-20px',  // Mengatur posisi horizontal
                transform: 'rotate(-9deg)', // Memiringkan gambar
                objectFit: 'contain', // Menjaga proporsi gambar
              }}
            />
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="space-y-8 flex flex-col items-center">
          <div
            className="bg-green-200 p-6 rounded-lg relative flex items-center justify-center overflow-visible"
            style={{ width: '250px', height: '190px' }}
          >
            <img
              src="/images/sungai.png"
              alt="Jadwal Tepat Waktu"
              style={{
                width: '400px',
                height: '254px',
                position: 'absolute',
                bottom: '-100px', // Menurunkan gambar ke bawah
                left: '0px',
                objectFit: 'contain', // Menjaga proporsi gambar
                transform: 'scale(1.4)', // Memperbesar sedikit tanpa distorsi
              }}
            />
          </div>
          <p className="font-poppins font-medium text-[15px] leading-relaxed max-w-[200px]">
            Nikmati kenyamanan perjalanan dengan jadwal kereta yang selalu tepat waktu dan mudah diingat.
          </p>
          <div
            className="bg-green-200 p-6 rounded-lg relative flex items-center justify-center"
            style={{ width: '250px', height: '190px' }}
          >
            <img
              src="/images/air terjun.png"
              alt="Perjalanan Menarik"
              style={{
                width: '400px',
                height: '254px',
                position: 'absolute',
                top: '-40px',
                left: '10px',
              }}
            />
          </div>
          <p className="font-poppins font-medium text-[15px] leading-relaxed max-w-[200px]">
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
      <h2 className="text-[32px] font-bold font-poppins mb-6">Apa kata pengguna?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="testimonial-item">
          <img
            src="images/gambar cewe.png"
            alt="Imelda Kasih"
            className="w-50 h-50 mx-auto rounded-full mb-0" // Menghapus margin bawah
            style={{ marginBottom: '-100px' }} // Menambahkan sedikit offset negatif
          />
          <h3 className="font-medium font-poppins text-[20px] mt-0">Imelda Kasih</h3> {/* Menghapus margin atas */}
          <p className="text-[20px] font-poppins text-gray-500 mt-0">Pekerja</p> {/* Menghapus margin atas */}
        </div>

        <div className="testimonial-item">
          <img
            src="images/gambar laki.png"
            alt="Jeromie Poline"
            className="w-50 h-50 mx-auto rounded-full mb-0" // Menghapus margin bawah
            style={{ marginBottom: '-80px' }} // Menambahkan sedikit offset negatif
          />
          <h3 className="font-medium text-[20px] font-poppins mt-0">Jeromie Poline</h3> {/* Menghapus margin atas */}
          <p className="text-[20px] font-poppins text-gray-500 mt-0">Youtuber</p> {/* Menghapus margin atas */}
          <p className="font-poppins font-medium text-[20px] text-center max-w-xs mx-auto mt-8">
            "Selama perjalanan sangat seru dan menyenangkan apalagi selama perjalanan di berikan pelayanan yang sangat memuaskan sekali"
          </p>
        </div>

        <div className="testimonial-item">
          <img
            src="images/gambar cewe.png"
            alt="Ayu Purama"
            className="w-50 h-50 mx-auto rounded-full mb-0" // Menghapus margin bawah
            style={{ marginBottom: '-100px' }} // Menambahkan sedikit offset negatif
          />
          <h3 className="font-medium text-[20px] font-poppins mt-0">Ayu Purama</h3> {/* Menghapus margin atas */}
          <p className="text-[20px] font-poppins text-gray-500 mt-0">Mahasiswi</p> {/* Menghapus margin atas */}
        </div>
      </div>
    </section>
  );
}


export default App;
