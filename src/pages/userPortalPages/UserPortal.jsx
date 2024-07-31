import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Example from "../../components/userPortal/Example";

const UserPortal = () => {
  return (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <Example />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
};

export default UserPortal;
