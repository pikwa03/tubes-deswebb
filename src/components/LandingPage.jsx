// src/components/LandingPage.jsx
<<<<<<< HEAD
// App.js
import React from 'react';
=======
import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
>>>>>>> 4cbd069 (routing)

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PopularRoutes />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
// Header Component
function Header() {
  return (
    <header className="bg-birukeknya p-4 flex justify-between items-center text-white">
      <div className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span className="font-bold text-xl">CHU CHU RAWR</span>
      </div>
      <nav className="space-x-4">
        <a href="#dashboard">Dashboard</a>
        <a href="#contact">Kontak</a>
        <a href="#signin">Sign in</a>
      </nav>
    </header>
  );
}

// HeroSection Component
function HeroSection() {
  return (
    <section className="text-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Selamat datang di Perjalanan Menyenangkan bersama Chu Chu Rawr</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FeatureCard 
          title="Tiket Kereta Api" 
          description="Tiket kereta api ini memiliki beberapa pilihan layanan kereta api yang dapat mengantarkan anda." 
          image="/images/kereta.png" 
        />
        <FeatureCard 
          title="Rute" 
          description="Kereta Api Chu Chu Rawr mengajak Anda menikmati pemandangan alam yang menakjubkan sepanjang perjalanan, dengan fasilitas modern yang menjamin kenyamanan Anda." 
          image="/images/rute.png" 
        />
        <FeatureCard 
          title="Jadwal" 
          description="Kami menawarkan jadwal keberangkatan yang fleksibel dan menarik untuk memenuhi kebutuhan perjalanan Anda yang nyaman dan tepat waktu." 
          image="/images/jadwal.png" 
        />
        <FeatureCard 
          title="Harga" 
          description="Kami menawarkan harga yang sangat terjangjau dari kelas ekonomi sampai eksklusif. Dapatkan diskon 10% untuk pemesanan yang dilakukan secara online." 
          image="/images/harga.png" 
        />
      </div>
=======
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
        <div className="text-[20px] md:text-[24px] lg:text-[32px] font-medium text-center">
          <FeatureCard
            title="Tiket Kereta Api"
            image="/images/kereta.png"
            imageSize={{ width: 222, height: 198 }}
          />
          <p className="font-poppins text-[15px] md:text-[15px] font-medium mt-6">
            "Tiket kereta api ini memiliki beberapa pilihan layanan kereta api yang dapat mengantarkan anda."
          </p>
        </div>

        <div className="text-[20px] md:text-[24px] lg:text-[32px] font-medium text-center">
          <FeatureCard
            title="Rute"
            image="/images/rute.png"
            imageSize={{ width: 222, height: 198 }}
          />
          <p className="font-poppins text-[15px] md:text-[15px] font-medium mt-6">
            "Kereta Api Chu Chu Rawr mengajak Anda menikmati pemandangan alam yang menakjubkan sepanjang perjalanan, dengan fasilitas modern yang menjamin kenyamanan Anda."
          </p>
        </div>

        <div className="text-[20px] md:text-[24px] lg:text-[32px] font-medium text-center">
          <FeatureCard
            title="Jadwal"
            image="/images/jadwal.png"
            imageSize={{ width: 252, height: 298 }}
          />
          <p className="font-poppins text-[15px] md:text-[15px] font-medium mt-6">
            "Kami menawarkan jadwal keberangkatan yang fleksibel dan menarik untuk memenuhi kebutuhan perjalanan Anda yang nyaman dan tepat waktu."
          </p>
        </div>

        <div className="text-[20px] md:text-[24px] lg:text-[32px] font-medium text-center">
          <FeatureCard
            title="Harga"
            image="/images/harga.png"
            imageSize={{ width: 222, height: 198 }}
          />
          <p className="font-poppins text-[15px] md:text-[15px] font-medium mt-6">
            "Kami menawarkan harga yang sangat terjangkau dari kelas ekonomi sampai eksklusif. Dapatkan diskon 10% untuk pemesanan yang dilakukan secara online."
          </p>
        </div>
      </div>

      {/* Garis Hijau */}
      <div className="bg-green mt-8 h-[80px] w-full absolute left-0" />
>>>>>>> 4cbd069 (routing)
    </section>
  );
}

<<<<<<< HEAD
function FeatureCard({ title, description, image }) {
  return (
    <div className="p-4 bg-[#95D2B3] rounded-lg shadow-md flex flex-col items-center">
      <img src={image} alt={title} className="w-10 h-10 mb-2" />
      <h2 className="text-xl font poppinsfont-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// PopularRoutes Component
function PopularRoutes() {
  return (
    <section className="flex justify-center items-center p-8 bg-[#D8EFD3]">
      <div className="text-center justify-center w-1/4">
        <h2 className="text-2xl font-bold mb-6">Rute Kereta Api Paling Populer</h2>
        <div/>
        <div className="text-center w-1/4"></div>
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
=======

const FeatureCard = ({ title, image, imageSize }) => (
  <div className="bg-green-custom p-4 rounded-lg flex flex-col items-center overflow-hidden">
    <img 
        src={image} 
        alt={title} 
        className="rounded-[25px] w-[222px] h-[198px] md:w-[180px] md:h-[160px] lg:w-[222px] lg:h-[198px]"
    />
    <h3 className="font-semibold mt-2 text-[16px] md:text-[18px] lg:text-[20px]">{title}</h3>
  </div>
);



function PopularRoutes() {
  return (
    <section className="flex flex-col items-center p-8 md:p-28 bg-light-green">
      <h2 className="text-[24px] md:text-[30px] font-bold font-poppins mb-8 text-center">
        Rute Kereta Api Paling Populer
      </h2>
      <div className="flex flex-col md:flex-row items-start w-full max-w-4xl">
        <div className="flex justify-end items-start md:w-1/3 ml-auto">
          <ul className="list-decimal text-left space-y-4 md:space-y-4">
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Semarang to Jakarta</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Jakarta to Surabaya</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Jakarta to Semarang</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Jakarta to Purwokerto</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Bandung to Malang</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Jakarta to Bandung</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Jakarta to Yogyakarta</li>
            <li className="font-medium font-poppins text-[18px] md:text-[24px] mt-4 md:mt-8">Semarang to Bandung</li>
          </ul>
        </div>
        {/* Memindahkan gambar ke dalam kontainer yang sama dengan daftar */}
        <div className="flex justify-center md:justify-end items-center md:w-1/2 ml-auto mt-8 md:mt-0">
          <img
            src="images/kereta kencana.png"
            alt="Kereta"
            className="w-[934px] md:w-[830px] lg:w-[600px] h-auto" 
          />
        </div>
      </div>
>>>>>>> 4cbd069 (routing)
    </section>
  );
}

<<<<<<< HEAD
// Features Component
function Features() {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Apa saja yang bisa didapatkan dari Kereta Api Chu Chu Rawr?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature icon="icon-path-1.png" description="Nikmati kursi yang luas dan ergonomis untuk perjalanan nyaman." />
        <Feature icon="icon-path-2.png" description="Jadwal kereta yang selalu tepat waktu dan mudah diingat." />
        <Feature icon="icon-path-3.png" description="Tetap terhibur dengan pilihan film, musik, dan permainan." />
        <Feature icon="icon-path-4.png" description="Perjalanan menarik langsung dari kursi Anda selama perjalanan." />
=======

function Features() {
  return (
    <section className="p-8 md:p-16 bg-gray-100 text-center">
      <div className="flex items-start justify-center mb-8">
        <h2
          className="font-poppins text-[20px] md:text-[24px] font-bold text-center"
          style={{ maxWidth: '390px', lineHeight: '1.2', letterSpacing: '-0.5px' }}
        >
          Apa saja yang bisa didapatkan dari Kereta Api Chu Chu Rawr?
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri */}
        <div className="space-y-8 flex flex-col items-center text-center">
          <p className="font-poppins font-medium text-[15px] md:text-[16px] leading-relaxed max-w-[200px]">
            Nikmati kursi yang luas dan ergonomis untuk perjalanan yang menenangkan.
          </p>
          <div
            className="bg-green-custom p-6 rounded-lg relative flex items-center justify-center"
            style={{ width: '250px', height: '190px' }} // Ukuran kontainer
          >
            <img
              src="/images/kursi.png"
              alt="Kursi"
              style={{
                width: '400px', // Ukuran gambar yang lebih besar
                height: '920px', // Ukuran gambar proporsional
                position: 'absolute', // Pastikan posisi absolute
                bottom: '-430px', // Agar gambar keluar dari latar
                left: '-10px',  // Mengatur posisi horizontal
                objectFit: 'contain', // Menjaga proporsi gambar
              }}
            />
          </div>

          <p className="font-poppins font-medium text-[15px] md:text-[16px] leading-relaxed max-w-[200px]">
            Tetap terhibur dengan pilihan film, musik, dan permainan kami.
          </p>
          <div
            className="bg-green-custom p-6 rounded-lg relative flex items-center justify-center overflow-visible"
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
            className="bg-green-custom p-6 rounded-lg relative flex items-center justify-center overflow-visible"
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
          <p className="font-poppins font-medium text-[15px] md:text-[16px] leading-relaxed max-w-[200px]">
            Nikmati kenyamanan perjalanan dengan jadwal kereta yang selalu tepat waktu dan mudah diingat.
          </p>
          <div
            className="bg-green-custom p-6 rounded-lg relative flex items-center justify-center"
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
          <p className="font-poppins font-medium text-[15px] md:text-[16px] leading-relaxed max-w-[200px]">
            Kami akan menawarkan perjalanan yang menarik langsung dari kursi kereta Anda selama perjalanan.
          </p>
        </div>
>>>>>>> 4cbd069 (routing)
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Feature({ icon, description }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <img src={icon} alt="" className="w-16 h-16 mx-auto mb-4" />
      <p>{description}</p>
    </div>
  );
}
=======
>>>>>>> 4cbd069 (routing)

// Testimonials Component
function Testimonials() {
  return (
    <section className="p-8 text-center bg-gray-100">
<<<<<<< HEAD
      <h2 className="text-2xl font-bold mb-6">Apa kata pengguna?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Testimonial name="Imelda Kasih" role="Pekerja" feedback="Perjalanan sangat seru dan menyenangkan!" />
        <Testimonial name="Jeromie Poline" role="Youtuber" feedback="Pelayanan yang sangat memuaskan sekali!" />
        <Testimonial name="Ayu Purama" role="Mahasiswi" feedback="Nikmati pengalaman yang berbeda dengan Chu Chu Rawr." />
=======
      <h2 className="text-[32px] font-bold font-poppins mb-6">Apa kata pengguna?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="testimonial-item flex flex-col items-center">
          <img
            src="images/gambar cewe.png"
            alt="Imelda Kasih"
            className="w-50 h-50 mx-auto rounded-full mb-[-50px]" // Offset the image downwards
          />
          <h3 className="font-medium font-poppins text-[20px] mt-4">Imelda Kasih</h3>
          <p className="text-[20px] font-poppins text-gray-500">Pekerja</p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-item flex flex-col items-center">
          <img
            src="images/gambar laki.png"
            alt="Jeromie Poline"
            className="w-50 h-50 mx-auto rounded-full mb-[-50px]" // Offset the image downwards
          />
          <h3 className="font-medium text-[20px] font-poppins mt-4">Jeromie Poline</h3>
          <p className="text-[20px] font-poppins text-gray-500">Youtuber</p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-item flex flex-col items-center">
          <img
            src="images/gambar cewe.png"
            alt="Ayu Purama"
            className="w-50 h-50 mx-auto rounded-full mb-[-50px]" // Offset the image downwards
          />
          <h3 className="font-medium text-[20px] font-poppins mt-4">Ayu Purama</h3>
          <p className="text-[20px] font-poppins text-gray-500">Mahasiswi</p>
        </div>
      </div>

      {/* Centered Testimonial */}
      <div className="flex items-center justify-center mt-10">
        <div className="testimonial-item flex flex-col items-center justify-center w-full max-w-lg p-4">
          <p className="font-poppins font-medium text-[20px] text-center text-gray-700">
            "Selama perjalanan sangat seru dan menyenangkan, apalagi selama perjalanan diberikan pelayanan yang sangat memuaskan sekali."
          </p>
        </div>
>>>>>>> 4cbd069 (routing)
      </div>
    </section>
  );
}

<<<<<<< HEAD
function Testimonial({ name, role, feedback }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="italic text-gray-700 mt-2">"{feedback}"</p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-teal-600 text-white p-8 text-center">
      <div className="flex justify-center space-x-8">
        <div>
          <h4 className="font-semibold">CHU CHU RAWR</h4>
          <p>Transportasi kereta api yang menggabungkan kesenangan dan kenyamanan di setiap perjalanan.</p>
        </div>
        <div>
          <h4 className="font-semibold">Dasboard</h4>
          <p>Tentang kami, Cara Memesan, Pusat Bantuan, Hubungi Kami</p>
        </div>
        <div>
          <h4 className="font-semibold">Quotes</h4>
          <p>"Perjalanan terbaik bukan hanya sampai di tujuan, tapi tentang setiap momen yang berharga."</p>
        </div>
      </div>
      <p className="mt-4">© CHU CHU RAWR 2024</p>
    </footer>
  );
}
=======

>>>>>>> 4cbd069 (routing)

export default App;
