import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import FormMutation from "../components/mutation/FormMutation";
import MutationResult from "../components/mutation/MutationResult";

const Mutation = () => {
  const { accessToken } = useAuth().authState;
  const { userInfo } = useAuth();

  const [mutationData, setMutationData] = useState([]);
  const [userData, setUserData] = useState();

  // Function to find data by cardNumber
  const findDataByCardNumber = (cardNumber) => {
    const result = userInfo.rekenings.find(
      (item) => item.cardNumber == cardNumber
    );
    if (result) {
      const { balance, cardNumber, jenisRekening } = result;
      return { balance, cardNumber, jenisRekening };
    } else {
      return "Data not found";
    }
  };

  useEffect(() => {
    // console.log(mutationData);
  }, [mutationData]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [jenisTransaksi, setJenisTransaksi] = useState("");

  // Fungsi untuk menangani pengiriman form
  const onSubmit = async (data) => {
    const { sumberRekening, periodeMutasi, jenisTransaksi } = data;
    const encodedPeriodeMutasi = encodeURIComponent(periodeMutasi);

    const url = `https://satu.cekrek.shop/api/v1/mutasi?cardNumber=${sumberRekening}&periodeMutasi=${encodedPeriodeMutasi}&jenisTransaksi=${jenisTransaksi}`;

    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      setMutationData(response.data.data);
      const userData = findDataByCardNumber(sumberRekening);
      userData.fullName = userInfo.fullName;
      userData.periodeMutasi = periodeMutasi;

      setUserData(userData);

      setJenisTransaksi(jenisTransaksi);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Transaksi
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-[#1A1A1A] mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 font-bold text-[#333999] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Mutasi Rekening
              </a>
            </div>
          </li>
        </ol>
      </div>

      <div className="border mt-4 border-[#8C91D9]"></div>

      <div className="bg-white p-10 rounded-xl shadow-md  mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Mutasi Rekening</h2>
        {!formSubmitted ? (
          <FormMutation userInfo={userInfo} onSubmit={onSubmit} />
        ) : (
          <MutationResult
            userData={userData}
            mutationData={mutationData}
            jenisTransaksi={jenisTransaksi}
          />
        )}
      </div>
    </>
  );
};

export default Mutation;
