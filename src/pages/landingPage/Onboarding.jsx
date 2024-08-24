import Navbar from "../../components/home/Navbar";
import satuDigibank from "/images/satuDigibank.png";
import satuMbanking from "/images/satuMbanking.png";
import appStore from "/images/appStore.png";
import playStore from "/images/googlePlay.png";
import Cards from "../../components/home/Cards";
import Footer from "../../components/home/Footer";

const Onboarding = () => {
  return (
    <div className="max-w-[1440px] container mx-auto">
      {/* first section */}
      <Navbar />
      <main className="h-[680px] flex" role="main">
        <section className="mt-[140px] ml-20 max-sm:ml-4 max-sm:mt-80">
          <img 
            className="mb-6 max-md:w-36" 
            src={satuDigibank} 
            alt="Logo Satu Digibank" 
          />
          <h1 
            className="w-[610px] font-[800] text-[56px] max-md:mt-4 max-md:w-auto max-md:text-2xl leading-[56px] text-blue-900"
          >
            <span className="text-[36px]">Lebih Mudah</span> <br /> Akses Satu
            Digibank Tanpa Harus ke Bank
          </h1>
          <p 
            className="mt-5 mb-6 font-[400] text-xl max-md:mt-2 max-md:mb-4 max-md:text-lg"
            id="access-info"
          >
            Akses Layanan Perbankan 24 Jam Tanpa Kendala
          </p>
          <button 
            className="w-[143px] px-4 py-2 text-md bg-blue-900 text-white font-semibold rounded-md"
            aria-labelledby="access-info"
          >
            Mulai
          </button>
        </section>
        <img 
          src="/images/imgHeader.png" 
          alt="Gambar header bank Satu" 
          className="max-sm:hidden md:hidden" 
        />
        <img 
          src="/images/imgHeader.png" 
          alt="Gambar header bank Satu" 
          className="max-md:h-96 absolute right-0" 
        />
      </main>

      {/* Second section */}
      <div className="flex-1 flex items-center justify-between mb-28">
        <img 
          src="/images/imgFooter.png" 
          alt="Gambar footer bank Satu" 
          className="max-md:mt-64 max-md:h-96 max-md:absolute max-md:right-72 w-[601px]"
        />
        <section className="mt-[90px] mr-20 max-md:mr-4 max-md:mt-0">
          <div className="flex justify-end">
            <img 
              className="mb-6" 
              src={satuMbanking} 
              alt="Logo Satu Mobile Banking" 
            />
          </div>
          <h2 
            className="text-right rtl:text-left w-[620px] font-[800] text-[56px] leading-[56px] text-blue-900 max-md:w-auto max-md:text-2xl"
          >
            Pelayanan Lengkap SATU Mobile Banking Dalam Genggaman
          </h2>
          <p 
            className="text-right mt-5 mb-6 font-[400] text-xl max-md:text-lg max-md:ml-20"
            id="mobile-info"
          >
            Akses Dimana Saja, Kapan Saja SATU Portal untuk Semua Transaksi
          </p>

          <div className="mt-4 max-md:mb-32">
            <div className="flex justify-end space-x-4 mt-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download dari App Store"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  className="w-30 h-10 object-cover"
                />
              </a>

              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download dari Google Play"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="w-30 h-10 object-cover"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
      {/* card */}
      <Cards />
      <Footer />
    </div>
  );
};

export default Onboarding;
