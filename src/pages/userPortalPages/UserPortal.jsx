import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Mutation from "../Mutation";
import CategoryTransfer from "../../components/transfer/CategoryTransfer";
import CategoryTransferOneBank from "../../components/transfer/CategoryTransferOneBank";
import TransferSatu from "../../components/transfer/TransferSatu";
import DetailTransfer from "../../components/transfer/DetailTransfer";
import StatusTransfer from "../../components/transfer/StatusTransfer";
import NotFoundUserPortal from "./NotFoundUserPortal";
import Homepage from "../../components/userPortal/Homepage";
import Savings from "../../components/userPortal/Savings";
import Qris from "../../components/userPortal/Qris.jsx";
import AccountPrivacy from "../../components/userPortal/AccountPrivacy.jsx";
import Notification from "../notification/Notification.jsx";
import { QrisProvider } from "../../context/QrisContext";
import { HomePageProvider } from "../../context/HomePageContext.jsx";

const UserPortal = () => (
  <DefaultLayout>
    <Routes>
      <Route
        path="/"
        element={
          <HomePageProvider>
            <Homepage />
          </HomePageProvider>
        }
      />
      <Route
        path="savings"
        element={
          <HomePageProvider>
            <Savings />
          </HomePageProvider>
        }
      />
      <Route path="mutasi-rekening" element={<Mutation />} />
      <Route path="transfer" element={<CategoryTransfer />} />
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
      <Route path="notification" element={<Notification />} />
      <Route
        path="qris"
        element={
          <QrisProvider>
            <Qris />
          </QrisProvider>
        }
      />
      <Route path="account-privacy" element={<AccountPrivacy />} />
      <Route path="*" element={<NotFoundUserPortal />} />
    </Routes>
  </DefaultLayout>
);

export default UserPortal;
