import loadEmailNumberIllustration from "../../../../assets/images/1.png";

const LoadEmailNumber = () => {
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img src={loadEmailNumberIllustration} alt="" className="w-[245px]" />
      <h1 className="font-bold text-2xl text-[#333999] text-center mb-5">
        Sedang memverifikasi <br /> alamat email ...
      </h1>
      <p className="text-center text-base font-normal">
        Silahkan klik link yang telah dikirimkan <br /> ke alamat email Anda
      </p>
      <p className="text-xs font-normal text-center my-4">
        Tidak mendapatkan link? <br />
        <span className="font-bold text-[#333999]">
          Kirim kembali
        </span> atau{" "}
        <span className="font-bold text-[#333999]">Ganti alamat email</span>
      </p>
    </div>
  );
};

export default LoadEmailNumber;
