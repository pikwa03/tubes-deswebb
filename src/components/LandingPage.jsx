// src/components/LandingPage.jsx
// App.js
import React from 'react';

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
    </section>
  );
}

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
    </section>
  );
}

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
      </div>
    </section>
  );
}

function Feature({ icon, description }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <img src={icon} alt="" className="w-16 h-16 mx-auto mb-4" />
      <p>{description}</p>
    </div>
  );
}

// Testimonials Component
function Testimonials() {
  return (
    <section className="p-8 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Apa kata pengguna?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Testimonial name="Imelda Kasih" role="Pekerja" feedback="Perjalanan sangat seru dan menyenangkan!" />
        <Testimonial name="Jeromie Poline" role="Youtuber" feedback="Pelayanan yang sangat memuaskan sekali!" />
        <Testimonial name="Ayu Purama" role="Mahasiswi" feedback="Nikmati pengalaman yang berbeda dengan Chu Chu Rawr." />
      </div>
    </section>
  );
}

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

export default App;
