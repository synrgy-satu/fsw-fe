import loadNumberCardIllustration from "../../../../assets/images/6.png";

const LoadNumberCard = () => {
  return (
    <div className="flex flex-col py-4 justify-center items-center">
      <img src={loadNumberCardIllustration} alt="" className="w-[285px]" />
      <h1 className="font-bold text-2xl text-[#333999] text-center mb-5">
        Sedang memverifikasi <br /> nomor kartu ...
      </h1>
    </div>
  );
};

export default LoadNumberCard;
