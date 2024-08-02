import React from "react";
import Sidebar from "../components/userPortal/Sidebar";
import Header from "../components/userPortal/Header";
import HeaderMutation from "../components/userPortal/HeaderMutation";
import { useLocation } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/portal/mutasi-rekening":
        return <HeaderMutation />;
      default:
        return <Header />;
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-boxdark-2 dark:text-bodydark">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {renderHeader()}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 2xl:p-10 bg-indigo-100">
          <div className="mx-auto max-w-screen-2xl ">{children}</div>
        </main>
      </div>
    </div>
  );
};

{
  /* <div className="w-full h-[4000px] bg-blue-500"></div> */
}
export default DefaultLayout;
