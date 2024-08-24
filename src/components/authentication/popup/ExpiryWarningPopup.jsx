// eslint-disable-next-line react/prop-types
const ExpiryWarningPopup = ({ onClose, onLogout }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative text-center w-[480px] h-[200px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-black">Peringatan</h2>
        <p className="mt-4 text-black font-normal text-base">
          Sesi Login anda akan habis karena tidak ada aktivitas
        </p>
        <div className="mt-8 flex justify-between">
          <button
            onClick={onClose}
            className="w-[200px] text-[#333999] bg-white border border-[#333999] hover:bg-[#d1cbff] font-bold text-base rounded-lg px-5 py-3 text-center"
          >
            Tetap Masuk
          </button>
          <button
            onClick={onLogout}
            className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
          >
            Keluar (30s)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpiryWarningPopup;
