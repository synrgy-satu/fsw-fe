import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../components/userPortal/Homepage";

const UserPortal = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Homepage />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
};

export default UserPortal;
