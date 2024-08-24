import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { QrisContext } from "../../context/QrisContext";

const Qris = () => {
  const {
    handleQrisStatusChange,
    isTransaksiOpen,
    setIsTransaksiOpen,
    qrisList,
    selectedQris,
    fetchQrisDetails,
    loading,
    error,
  } = useContext(QrisContext);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    fetchQrisDetails(selectedId);
  };

  const handleDeleteClick = () => {
    if (selectedQris) {
      handleQrisStatusChange(selectedQris.id, "false");
    }
  };

  const handleActivateClick = () => {
    if (selectedQris) {
      handleQrisStatusChange(selectedQris.id, "true");
    }
  };

  const handleSaveImageClick = () => {
    if (selectedQris && selectedQris.imageUrl) {
      const link = document.createElement("a");
      link.href = selectedQris.imageUrl;
      link.download = "qris-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="box-border p-2">
      <div className="flex">
        <ol className="inline-flex items-center">
          <li className="inline-flex items-center">
            <Link
              to="#"
              className="inline-flex items-center text-[#333999] text-base font-semibold"
            >
              QRIS
            </Link>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#333999] mb-1"></div>

      <div className="flex gap-4 items-center mb-4">
        <p className="font-bold text-2xl text-black py-2">QRIS</p>
        <div className="relative w-[480px]">
          <select
            className="block w-full px-8 h-[48px] border border-[#333999] rounded-lg text-[#808080] focus:outline-none focus:ring-1 focus:border-[#272D87] appearance-none"
            onClick={() => setIsTransaksiOpen(!isTransaksiOpen)}
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {loading ? "Loading..." : "Pilih Tabungan"}
            </option>
            {error && <option disabled>{error}</option>}
            {qrisList.map((qris) => (
              <option
                key={qris.id}
                value={qris.id}
                className="py-2 px-4 text-black hover:bg-[#f0f0f0]"
              >
                {qris.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-8 pointer-events-none text-2xl text-[#808080]">
            <FiChevronDown
              className={`transition-transform ${
                isTransaksiOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        <button className="w-[129px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center">
          Buat Baru
        </button>
      </div>

      <div className="flex gap-4 pe-4">
        <div className="max-w-[430px] flex flex-col items-center justify-center">
          <div
            className="bg-[#D9D9D9] w-[430px] h-[594px] flex items-center justify-center mb-6 bg-no-repeat bg-center bg-cover pt-12"
            style={{ backgroundImage: `url(/images/qris-dummy.png)` }}
          >
            {selectedQris && (
              <div className="flex flex-col items-center bg-white pt-2 px-2">
                <h2 className="text-3xl font-bold text-black">
                  {selectedQris.name}
                </h2>
                <h3 className="text-lg font-semibold text-black">
                  NMID : {selectedQris.nmid}
                </h3>
                <img
                  src={selectedQris.imageUrl}
                  alt="Selected QRIS"
                  className="max-w-full max-h-full"
                  style={{ objectFit: "contain" }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-between w-full">
            <button
              className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
              onClick={handleSaveImageClick}
            >
              Simpan Gambar
            </button>
            <button className="w-[200px] text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center">
              Cetak Gambar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="w-[542px] h-[369px] bg-white rounded-2xl p-6">
            <p className="text-black font-bold text-xl">Informasi QRIS</p>
            <div className="flex flex-col gap-4 mt-7">
              <div className="flex">
                <p className="text-black text-base font-bold w-40">Nama QRIS</p>
                <p className="text-black text-base">
                  {selectedQris ? selectedQris.name : "-"}
                </p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">NMID</p>
                <p className="text-black text-base">
                  {selectedQris ? selectedQris.nmid : "-"}
                </p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">QRIS ID</p>
                <p className="text-black text-base">
                  {selectedQris ? selectedQris.encodedQrCode : "-"}
                </p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">
                  Masa Berlaku
                </p>
                <p className="text-black text-base">
                  {selectedQris
                    ? new Date(selectedQris.activeUntil).toLocaleDateString()
                    : "-"}
                </p>
              </div>
              <div className="flex">
                <p className="text-black text-base font-bold w-40">Status</p>
                <p
                  className={`text-base ${
                    selectedQris?.active ? "text-[#12D79C]" : "text-[#CB3A31]"
                  }`}
                >
                  {selectedQris
                    ? selectedQris.active
                      ? "Aktif"
                      : "Nonaktif"
                    : "-"}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <button
              className="w-[260px] text-[#333999] bg-white hover:bg-[#272D87] hover:text-white border border-[#333999] font-bold text-base rounded-lg px-5 py-3 text-center"
              onClick={handleActivateClick}
            >
              Aktifkan QRIS
            </button>
            <button
              className="w-[260px] text-white bg-[#CB3A31] hover:bg-[#aa372f] font-bold text-base rounded-lg px-5 py-3 text-center"
              onClick={handleDeleteClick}
            >
              Hapus QRIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qris;
