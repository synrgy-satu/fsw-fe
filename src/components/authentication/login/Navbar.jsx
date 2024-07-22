import logo from "../../../../public/images/logoTagLine.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 gap-4 md:mx-20 md:mt-10 md:mb-7">
      <img src={logo} alt="" />
      <div className="col-span-2">
        <div className="flex md:gap-12">
          <div className="font-bold">Individu</div>
          <div>Bisnis</div>
          <div>Prioritas</div>
          <div>Tentang Kami</div>
        </div>
      </div>
    </div>
  );
}
