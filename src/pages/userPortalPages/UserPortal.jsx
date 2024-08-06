import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Mutation from "../Mutation";
import CategoryTransfer from "../../components/transfer/CategoryTransfer";
import CategoryTransferOneBank from "../../components/transfer/CategoryTransferOneBank";
import TransferSatu from "../../components/transfer/TransferSatu";
import DetailTransfer from "../../components/transfer/DetailTransfer";
import StatusTransfer from "../../components/transfer/StatusTransfer";
import Savings from "./Savings";

const UserPortal = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <Homepage />
            </>
          }
        />
        <Route path="mutasi-rekening" element={<Mutation />} />
        <Route path="transfer" element={<CategoryTransfer />} />
        <Route path="savings" element={<Savings />} />
        <Route path="transfer/tf-one" element={<CategoryTransferOneBank />} />
        <Route path="transfer/tf-one/satu" element={<TransferSatu />} />
        <Route
          path="transfer/tf-one/satu/detail-tf"
          element={<DetailTransfer />}
        />
        <Route
          path="transfer/tf-one/satu/detail-tf/status-tf"
          element={<StatusTransfer />}
        />
      </Routes>
    </DefaultLayout>
  );
};

export default UserPortal;
