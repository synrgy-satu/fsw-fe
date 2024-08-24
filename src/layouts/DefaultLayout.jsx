// src/layouts/DefaultLayout.jsx
import { useLocation } from "react-router-dom";
import Sidebar from "../components/userPortal/Sidebar";
import Header from "../components/userPortal/Header";
import HeaderMutation from "../components/mutation/HeaderMutation";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/portal/mutasi-rekening":
      case "/portal/transfer":
      case "/portal/transfer/tf-one":
      case "/portal/transfer/tf-one/satu":
      case "/portal/transfer/tf-one/satu/detail-tf":
      case "/portal/transfer/tf-one/satu/detail-tf/status-tf":
        return <HeaderMutation />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          {renderHeader()}

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6  bg-[#ecedf9]">
            <div className="mx-auto max-w-screen-2xl ">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
