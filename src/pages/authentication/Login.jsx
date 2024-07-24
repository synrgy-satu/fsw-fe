import Navbar from "../../components/authentication/login/Navbar";
import LoginHero from "../../components/authentication/login/LoginHero";
import LoginForm from "../../components/authentication/login/LoginForm";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="custom-radial-gradient">
        <div className="grid grid-cols-2 gap-2 pb-44">
          <LoginHero />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
