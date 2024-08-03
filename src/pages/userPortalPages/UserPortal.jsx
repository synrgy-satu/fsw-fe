import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../components/userPortal/Homepage";
import Mutation from "../Mutation";

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
      </Routes>
    </DefaultLayout>
  );
};

export default UserPortal;
