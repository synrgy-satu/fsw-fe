import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";
import Example from "../../components/userPortal/Example";
import Mutation from "../Mutation";

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
        <Route
          path="mutasi-rekening"
          element={<Mutation />}
        />
      </Routes>
    </DefaultLayout>
  );
};

export default UserPortal;
