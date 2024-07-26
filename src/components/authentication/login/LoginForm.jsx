import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default function LoginForm() {
  const { login, error, isResetPassword, setIsResetPassword } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(email, password);
    try {
      await login(email, password);
      console.log("Login Success");
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally, set some form-level error state here
    }
  };

  return (
    <div className="flex justify-end pt-32 pe-6">
      <div className="w-[360px] max-w-sm bg-white border border-gray-200 rounded-3xl shadow py-8 px-5">
        {!isResetPassword ? (
          <form
            className="space-y-7"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex justify-center">
              <img src="/images/logo-satu-digibank.png" alt="Logo" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-normal text-black mb-2"
              >
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "*Email Wajib Diisi",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "*Format Email Salah",
                  },
                }}
                render={({ field }) => (
                  <input
                    id="email"
                    type="email"
                    placeholder="Masukkan Email"
                    {...field}
                    className={`mt-1 block w-full px-3 py-3 rounded-lg focus:outline-none focus:ring-2 text-base font-semibold bg-[#F3F3F3] text-black placeholder-[#B3B3B3] opacity-90 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                )}
              />
              {errors.email && (
                <p className="mt-2 text-[12px] font-normal text-[#CB3A31]">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-base font-normal text-black mb-2"
              >
                Kata Sandi
              </label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "*Password Wajib Diisi" }}
                render={({ field }) => (
                  <input
                    id="password"
                    type="password"
                    placeholder="Masukkan Kata Sandi"
                    {...field}
                    className={`mt-1 block w-full px-3 py-3 rounded-lg focus:outline-none focus:ring-2 text-base font-semibold bg-[#F3F3F3] text-black placeholder-[#B3B3B3] opacity-90 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-indigo-500 focus:border-indigo-500"
                    }`}
                  />
                )}
              />
              {errors.password && (
                <p className="mt-2 text-[12px] font-normal text-[#CB3A31]">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && (
              <p className="mt-2 text-[12px] font-normal text-[#CB3A31]">
                {error.message || "An error occurred. Please try again."}
              </p>
            )}

            <button
              type="submit"
              className="w-full text-white bg-[#333999] hover:bg-blue-800 font-bold text-base rounded-lg px-5 py-3 text-center"
            >
              <div className="flex justify-center">
                <p className="mr-3">Masuk</p>
                <div>
                  <i className="text-2xl fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </button>
          </form>
        ) : (
          <ForgotPasswordForm />
        )}
        {!isResetPassword && (
          <div className="space-y-4 mt-4">
            <div className="flex justify-center">
              <a
                href="#"
                onClick={() => setIsResetPassword(true)}
                className="font-bold text-[#333999]"
              >
                Lupa Kata Sandi?
              </a>
            </div>
            <div className="border-t-2 border-[#C6C8EC]"></div>
            <div className="text-base font-normal text-black">
              Belum Punya Akses SATU Digibank ?
            </div>
            <div className="flex w-full">
              <button
                type="button"
                onClick={handleRegisterClick}
                className="w-full text-[#333999] border border-[#333999] hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5 text-center "
              >
                Mendaftar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
