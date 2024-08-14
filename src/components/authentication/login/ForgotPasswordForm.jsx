import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../../context/authContext";

export default function ForgotPasswordForm() {
  const { forgotPassword } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const handleResetSubmit = async (data) => {
    const { email } = data;
    console.log("email: ", email);

    // use authContext.jsx to post email to forgot-password api to the server
    try {
      await forgotPassword(email);
      console.log("Forgot password success");
    } catch (error) {
      console.error("Forgot password failed:", error);
    }
  };

  return (
    <>
      <form
        className="space-y-5"
        onSubmit={handleSubmit(handleResetSubmit)}
        noValidate
      >
        <div className="flex justify-center">
          <img src="/images/logo-satu-digibank.png" alt="Logo" />
        </div>
        <div className="font-bold text-black text-[28px] leading-[38.13px]">
          Atur Ulang Kata Sandi
        </div>
        <div className="text-start text-sm font-semibold text-[#808080]">
          Masukkan Email akun yang digunakan untuk mengakses{" "}
          <span className="text-[#333999]">SATU Digibank</span>
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
        <div className="text-start text-xs font-normal">
          Kami akan mengirimkan link verifikasi untuk melakukan pengubahan kata
          sandi anda
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[#333999] hover:bg-[#272D87] font-bold text-base rounded-lg px-5 py-3 text-center"
        >
          Kirim
        </button>
      </form>
    </>
  );
}
