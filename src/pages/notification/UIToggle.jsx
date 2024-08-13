import React from "react";
import "./UIToggle.css";

const UIToggle = ({ toggle, activeTab }) => {
  return (
    <div className="toggle-container" onClick={toggle}>
      <div
        className="toggle-active"
        style={{
          left: activeTab === "Semua" ? "6px" : "calc(100% - 50% + 6px)",
        }}
      ></div>
      <div
        className={`toggle-option ${
          activeTab === "Semua" ? "option-1-active" : ""
        }`}
      >
        Semua
      </div>
      <div
        className={`toggle-option ${
          activeTab === "Transaksi" ? "option-2-active" : ""
        }`}
      >
        Transaksi
      </div>
    </div>
  );
};

export default UIToggle;
