import logo from "../../../../public/images/logoTagLine.png";

export default function Navbar() {
  return (
    <div className="flex items-center mx-20 mt-10 mb-7">
      <img src={logo} alt="Logo" />
      <div className="flex gap-12 ml-56">
        <div className="font-bold">Individu</div>
        <div>Bisnis</div>
        <div>Prioritas</div>
        <div>Tentang Kami</div>
      </div>
    </div>
  );
}
